let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.4156, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2992, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3789, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0334, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0669, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.312, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0212, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1716, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0849, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0343, "optimal":"yes"} ]}; 
