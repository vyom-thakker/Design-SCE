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
{"source":"Households", "target":"Curbside Collection", "value":2.1162, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.326, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.9294, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1703, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3405, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.5889, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.2753, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.8739, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.2967, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.143, "optimal":"yes"} ]}; 
