let dataV={"nodes": [
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
{"source":"Households", "target":"Curbside Collection", "value":0.6299, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6299, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0556, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.6299, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.004, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.3464, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.2102, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0693, "optimal":"yes"} ]}; 
