let dataV={"nodes": [
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.25, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4647, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.228, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0201, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.228, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0775, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1254, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0251, "optimal":"yes"} ]}; 
