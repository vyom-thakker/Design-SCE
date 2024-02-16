let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6231, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0916, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5681, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0501, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1003, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4678, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2573, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1591, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0515, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
