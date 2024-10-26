use sysinfo::{
    Components, Disks, Networks, System,
};


fn main() {
    let mut sys = System::new_all();

    sys.refresh_all();


    println!("F4TCH");
    println!("◑◡◑");
    println!("|| foo@{:?}", System::host_name());
    println!("Kernel Version: {:?}", System::kernel_version());



}



