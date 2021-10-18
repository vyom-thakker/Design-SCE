let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0058, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0006, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.5198, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0669, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4528, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Incineration", "value":0.0575, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0076, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0575, "optimal":"yes"} ]}; 
