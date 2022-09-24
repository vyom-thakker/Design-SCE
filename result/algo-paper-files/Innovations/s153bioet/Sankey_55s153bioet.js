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
{"source":"Households", "target":"Curbside Collection", "value":0.1902, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5245, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1735, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0153, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0306, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1428, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.025, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0786, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0236, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0157, "optimal":"yes"} ]}; 
