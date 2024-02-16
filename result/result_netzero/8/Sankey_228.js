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
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0824, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5905, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.1811, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7526, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1014, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6862, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0606, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1211, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0545, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3907, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.1198, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0196, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.03, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0049, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1328, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2149, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.043, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0443, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0659, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0096, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ]}; 