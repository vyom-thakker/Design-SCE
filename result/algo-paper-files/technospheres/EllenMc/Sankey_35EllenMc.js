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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"Incineration", "target":"Landfill", "value":0.0637, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0071, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":2.0646, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.1654, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.9653, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2647, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0025, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.8465, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.635, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2509, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1581, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.635, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.1913, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0153, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0689, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.1052, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0172, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0052, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0084, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0017, "optimal":"yes"} ]}; 