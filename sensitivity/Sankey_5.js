let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.0283, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6291, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.0343, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1632, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.359, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.6752, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.048, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9214, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.5551, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1508, "optimal":"yes"} ]}; 
