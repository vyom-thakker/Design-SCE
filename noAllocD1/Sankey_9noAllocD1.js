let dataV={"nodes": [
{"name":"Landfill"},
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
 {"source":"HDPE", "target":"Households", "value":0.29, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.64, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8226, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1105, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.75, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0662, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1324, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.19, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.42, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.1045, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0171, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.231, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0462, "optimal":"yes"} ]}; 
