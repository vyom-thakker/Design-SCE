let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"Lumber"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.2105, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4209, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.4209, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8394, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2129, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7653, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0675, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":-1.148, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.3827, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.7653, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.7653, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.1378, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.2105, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0344, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1304, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.4209, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1298, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0842, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.2832, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.4209, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0612, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ]}; 
