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
 {"source":"HDPE", "target":"Households", "value":0.4858, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3831, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.3581, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9788, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2483, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8924, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0788, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":-1.3386, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.8833, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.6966, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.6511, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.2888, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.4858, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0292, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0795, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.3831, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.2368, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0766, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.3581, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.2409, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0521, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ]}; 