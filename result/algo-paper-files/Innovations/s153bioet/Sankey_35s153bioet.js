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
{"source":"Households", "target":"Curbside Collection", "value":0.442, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2727, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.403, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0356, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0711, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3319, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0221, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1825, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0907, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0365, "optimal":"yes"} ]}; 
