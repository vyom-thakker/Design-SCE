let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0189, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":9.1753, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":8.0861, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.0892, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0948, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":5.1171, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.9667, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.6506, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3471, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":1.6196, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":1.5969, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0211, "optimal":"yes"} ]}; 
