use sysinfo::{
    Components, Disks, Networks, System,
};

let mut sys = System:new_all();


sys.refresh_all();