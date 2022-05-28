let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0758, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0008, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7145, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6236, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0068, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0849, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.3756, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1179, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0502, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0039, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0012, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0008, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.021, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.098, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Pyrolysis", "value":0.0256, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0077, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0539, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0108, "optimal":"yes"} ]}; 