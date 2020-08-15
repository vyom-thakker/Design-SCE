let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Incineration"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.4043, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.1923, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":10.7722, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":9.4935, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.2788, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":2.024, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Incineration", "value":5.6217, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":1.0818, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":5.6217, "optimal":"yes"} ]}; 
