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
 {"source":"HDPE", "target":"Households", "value":2.6679, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0049, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3556, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3173, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1477, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1895, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3791, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.7653, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0033, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.6355, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9709, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1589, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0011, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0018, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0004, "optimal":"yes"} ]}; 