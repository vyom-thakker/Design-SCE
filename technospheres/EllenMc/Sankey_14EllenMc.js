let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"Incineration", "target":"Landfill", "value":0.0257, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0029, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.2521, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6476, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7929999999999999, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1068, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.3416, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.2562, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1012, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0638, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.2562, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0234, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.06, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0084, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0128, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0021, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0204, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.033, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0066, "optimal":"yes"} ]}; 