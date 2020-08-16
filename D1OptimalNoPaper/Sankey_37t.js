let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPLA"},
{"name":"Compost"},
{"name":"Clinker"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0897, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6877, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0185, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6666, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1292, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0004, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6073, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0536, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1072, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0563, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4322, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0101, "optimal":"yes"} , 
{"source":"Segregation", "target":"Compost", "value":0.0015, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0203, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.031, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0051, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0898, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2377, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Clinker", "value":0.0238, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0333, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0475, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0079, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0015, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0007, "optimal":"yes"} ]}; 