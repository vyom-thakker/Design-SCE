let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0463, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0808, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":1.0969, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0109, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.0883, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1466, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.9922, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0876, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1751, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0306, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0535, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.7258, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0072, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.011, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0168, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0028, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0182, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0294, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0059, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.2686, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.3992, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0581, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0056, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0011, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0005, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ]}; 
