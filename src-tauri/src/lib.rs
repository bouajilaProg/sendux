use local_ip_address::local_ip;
use mdns_sd::{ServiceDaemon, ServiceInfo};
use std::{fmt::format, net::Ipv4Addr};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

pub fn broadcast_name(name: &str) {
    // This function can be used to broadcast the name to all connected clients
    // debug
    println!("Broadcasting name: {}", name);

    // get the local IP address
    let ip: std::net::IpAddr = local_ip().expect("Could not get local IP");

    // logic
    // create new service deamon
    let mdns = ServiceDaemon::new().expect("Failed to create mDNS daemon");

    // define service info
    let service_type = "_sendux._tcp.local.";
    let host_name = format!("{}.local", ip);
    let port = 9000;
    let metda_data = [
        ("version", "1.0"),
        ("desc", "sendux_sender"),
        ("name", name),
    ];

    let properties = metda_data
        .iter()
        .map(|(k, v)| (k.to_string(), v.to_string()))
        .collect::<std::collections::HashMap<String, String>>();

    // create the service info
    let service_info = ServiceInfo::new(
        service_type,
        name,
        &host_name,
        Ipv4Addr::new(192, 168, 1, 108),
        port,
        properties,
    )
    .expect("Failed to create service info");

    // register the service
    mdns.register(service_info)
        .expect("Failed to register service");

    println!("Service registered successfully");

    loop {
        // keep the service running
        println!("broadcasting...");
        println!("\r");
        std::thread::sleep(std::time::Duration::from_secs(60));
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
