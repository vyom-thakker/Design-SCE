let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0064, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0009, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.3988, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3058, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0006, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0801, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7201, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Incineration", "value":0.0686, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0091, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0686, "optimal":"yes"} ]}; 
