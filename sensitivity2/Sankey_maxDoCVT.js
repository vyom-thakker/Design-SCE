let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.5717, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.5717, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.089, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5213, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.046, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.092, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.5213, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.1877, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.2867, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0136, "optimal":"yes"} ]}; 
