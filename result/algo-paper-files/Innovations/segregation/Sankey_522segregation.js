let dataV={"nodes": [
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Clinker"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3919, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3228, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3574, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0315, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3574, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0668, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1965, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Clinker", "value":0.0547, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0393, "optimal":"yes"} ]}; 
