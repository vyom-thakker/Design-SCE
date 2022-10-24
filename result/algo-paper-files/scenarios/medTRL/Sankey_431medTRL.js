let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPLA"},
{"name":"Lumber"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.037000000000000005, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0359, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6814, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.1382, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3603, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0032, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.49200000000000005, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.1836, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1082, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.028999999999999998, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0016, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0009, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0193, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0038, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0551, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0145, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0009, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0119, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0021, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0014, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0303, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0187, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0061, "optimal":"yes"} , 
{"source":"rPLA", "target":"Pyrolysis", "value":0.0113, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0022, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.001, "optimal":"yes"} ]}; 