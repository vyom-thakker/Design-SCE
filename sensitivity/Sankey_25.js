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
 {"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8384, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.6037, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7644, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0675, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1349, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.6295, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.2266, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.3462, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0567, "optimal":"yes"} ]}; 
