let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0015, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.1562, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5585, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0073, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1337, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0126, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0236, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1101, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0605, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0374, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0121, "optimal":"yes"} ]}; 
