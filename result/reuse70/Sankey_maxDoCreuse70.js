let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":1.8805, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.6572, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2232, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.511, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1333, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2667, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.2443, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.4479, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.6844, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.112, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ]}; 
