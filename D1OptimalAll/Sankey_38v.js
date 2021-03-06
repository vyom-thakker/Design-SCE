let dataV={"nodes": [
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
 {"source":"HDPE", "target":"Households", "value":0.0073, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7128, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6346, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0855, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5786, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0511, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1021, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0048, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4716, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0017, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0026, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1604, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2594, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0519, "optimal":"yes"} ]}; 
