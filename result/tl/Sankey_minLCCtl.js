let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Dropoff"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.3698, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.0049, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0029, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.3719, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Landfill", "value":0.0024, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0003, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ]}; 
