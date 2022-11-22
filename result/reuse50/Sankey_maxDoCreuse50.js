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
 {"source":"HDPE", "target":"Households", "value":1.3432, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1837, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1595, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.0793, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0952, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1905, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.8888, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.32, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.4888, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.08, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ]}; 
