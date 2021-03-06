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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"Incineration", "target":"Landfill", "value":0.0367, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0041, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.7781, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5077, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1332, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1526, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0014, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.4881, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.3661, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1446, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0912, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.3661, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0721, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.047, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0259, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0396, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0065, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.016, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0259, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0052, "optimal":"yes"} ]}; 
