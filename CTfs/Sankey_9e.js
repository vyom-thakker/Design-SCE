let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":2.3326, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":0.8586, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.8123, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3788, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.5641, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2263, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.4526, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.5495, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.5435, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.5681, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.5556, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.8489, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1389, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.5602, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0074, "optimal":"yes"} ]}; 