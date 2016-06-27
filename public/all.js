/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var CanvasGraphConstructor, GraphBuilder, GraphTable, g1, g2, gt, mainloop, mainloop_objects, prg;
	
	CanvasGraphConstructor = __webpack_require__(1);
	
	GraphBuilder = __webpack_require__(5);
	
	GraphTable = __webpack_require__(6);
	
	mainloop_objects = [];
	
	mainloop = function() {
	  var dt, step, time;
	  time = Date.now();
	  dt = 14;
	  step = function() {
	    var cur_dt, j, k, len, len1, obj;
	    cur_dt = Date.now() - time;
	    time = Date.now();
	    cur_dt = Math.min(cur_dt, 1000);
	    while (cur_dt > 0) {
	      for (j = 0, len = mainloop_objects.length; j < len; j++) {
	        obj = mainloop_objects[j];
	        if (obj.update != null) {
	          obj.update(dt);
	        }
	      }
	      cur_dt -= dt;
	    }
	    for (k = 0, len1 = mainloop_objects.length; k < len1; k++) {
	      obj = mainloop_objects[k];
	      if (obj.render != null) {
	        obj.render();
	      }
	    }
	    return requestAnimationFrame(step);
	  };
	  return requestAnimationFrame(step);
	};
	
	mainloop();
	
	g1 = GraphBuilder.builder1({
	  "vertices": {
	    "0": {
	      "x": 198,
	      "y": 375.1875
	    },
	    "1": {
	      "x": 93,
	      "y": 326.1875
	    },
	    "2": {
	      "x": 302,
	      "y": 338.1875
	    },
	    "3": {
	      "x": 43,
	      "y": 250.1875,
	      "name": "3"
	    },
	    "4": {
	      "x": 154,
	      "y": 247.1875,
	      "name": "4"
	    },
	    "5": {
	      "x": 300,
	      "y": 272.1875,
	      "name": "5"
	    },
	    "6": {
	      "x": 261,
	      "y": 208.1875,
	      "name": "6"
	    },
	    "7": {
	      "x": 354,
	      "y": 229.1875,
	      "name": "7"
	    },
	    "8": {
	      "x": 103,
	      "y": 170.1875,
	      "name": "8"
	    },
	    "9": {
	      "x": 37,
	      "y": 58.1875,
	      "name": "9"
	    },
	    "10": {
	      "x": 113,
	      "y": 62.1875,
	      "name": "10"
	    },
	    "11": {
	      "x": 194,
	      "y": 60.1875,
	      "name": "11"
	    },
	    "12": {
	      "x": 327,
	      "y": 183.1875,
	      "name": "12"
	    },
	    "13": {
	      "x": 361,
	      "y": 145.1875,
	      "name": "13"
	    },
	    "14": {
	      "x": 320,
	      "y": 113.1875,
	      "name": "14"
	    },
	    "15": {
	      "x": 357,
	      "y": 77.1875,
	      "name": "15"
	    },
	    "16": {
	      "x": 317,
	      "y": 46.1875,
	      "name": "16"
	    }
	  },
	  "links": {
	    "0": ["1", "2"],
	    "1": ["3", "4"],
	    "2": ["5"],
	    "3": ["8"],
	    "5": ["6", "7"],
	    "8": ["9"],
	    "10": ["8"],
	    "11": ["8"],
	    "12": ["7", "13"],
	    "13": ["14"],
	    "14": ["15"],
	    "15": ["16"]
	  }
	});
	
	g2 = GraphBuilder.builder1({
	  "vertices": {
	    "0": {
	      "x": 191,
	      "y": 380.375,
	      "name": "0"
	    },
	    "1": {
	      "x": 50,
	      "y": 320.375,
	      "name": "1"
	    },
	    "2": {
	      "x": 309,
	      "y": 303.375,
	      "name": "2"
	    },
	    "3": {
	      "x": 68,
	      "y": 190.375,
	      "name": "3"
	    },
	    "4": {
	      "x": 306,
	      "y": 180.375,
	      "name": "4"
	    },
	    "5": {
	      "x": 65,
	      "y": 71.375,
	      "name": "5"
	    },
	    "6": {
	      "x": 184,
	      "y": 187.375,
	      "name": "6"
	    },
	    "7": {
	      "x": 266,
	      "y": 89.375,
	      "name": "7"
	    },
	    "8": {
	      "x": 352,
	      "y": 82.375,
	      "name": "8"
	    },
	    "9": {
	      "x": 177,
	      "y": 297.375,
	      "name": "9"
	    }
	  },
	  "links": {
	    "0": ["2", "1", "9"],
	    "1": ["3"],
	    "2": ["4"],
	    "3": ["5"],
	    "4": ["7", "8"],
	    "6": ["9"]
	  }
	});
	
	gt = [new GraphTable("#gt1", g1), new GraphTable("#gt2", g2)];
	
	mainloop_objects = mainloop_objects.concat(gt);
	
	prg = function(i) {
	  return console.log(JSON.stringify(GraphBuilder.make_options_for_builder1(gt[i].graph)));
	};
	
	_.defaults(window, {
	  GraphBuilder: GraphBuilder,
	  prg: prg,
	  gt: gt
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var CanvasGraphConstructor, Graph, GraphDrawer, utils;
	
	utils = __webpack_require__(2);
	
	GraphDrawer = __webpack_require__(3);
	
	Graph = __webpack_require__(4);
	
	module.exports = CanvasGraphConstructor = (function() {
	  function CanvasGraphConstructor(container, graph) {
	    this.container = container;
	    this.graph = graph != null ? graph : new Graph;
	    this.can = $("<canvas>").get(0);
	    this.ctx = this.can.getContext('2d');
	    this.can.width = this.can.height = 400;
	    this.mouse = {
	      x: 0,
	      y: 0,
	      target: null
	    };
	    this.focus = false;
	    this.handle_events();
	    $(this.container).append(this.can);
	    this.graph_drawer = new GraphDrawer(this.graph, this.ctx);
	  }
	
	  CanvasGraphConstructor.prototype.update_mouse = function(e) {
	    var pos;
	    pos = utils.get_mousepos_in_element(this.can, e);
	    this.mouse.x = pos.x;
	    return this.mouse.y = pos.y;
	  };
	
	  CanvasGraphConstructor.prototype.handle_events = function() {
	    $(this.can).mouseout((function(_this) {
	      return function() {
	        return _this.focus = false;
	      };
	    })(this));
	    $(this.can).mouseover((function(_this) {
	      return function() {
	        return _this.focus = true;
	      };
	    })(this));
	    $(this.can).mousemove((function(_this) {
	      return function(e) {
	        var vertex_name;
	        _this.update_mouse(e);
	        if (_this.mouse.target) {
	          if (_this.mouse.dragtype === "move") {
	            vertex_name = _this.mouse.target;
	            _this.graph.set_vinfo(vertex_name, utils.vec2(_this.mouse.x, _this.mouse.y));
	          }
	          if (_this.mouse.dragtype === "link") {
	            return _this.mouse.linkend = _.clone(utils.vec2(_this.mouse.x, _this.mouse.y));
	          }
	        }
	      };
	    })(this));
	    $(this.can).mousedown((function(_this) {
	      return function(e) {
	        var vname;
	        vname = _this.graph_drawer.get_vertex_byxy(_this.mouse);
	        if ((vname != null) && (_this.mouse.target != null) && _this.mouse.dragtype === "link") {
	          _this.graph.add_link(_this.mouse.target, vname);
	          return;
	        }
	        _this.mouse.target = vname;
	        return _this.mouse.dragtype = "move";
	      };
	    })(this));
	    $(this.can).mouseup((function(_this) {
	      return function(e) {
	        _this.mouse.target = null;
	        return _this.mouse.dragtype = null;
	      };
	    })(this));
	    return $(document).keydown((function(_this) {
	      return function(e) {
	        var ch, cmd, i, len, name, ref, v, vname;
	        if (!_this.focus) {
	          return;
	        }
	        ch = String.fromCharCode(e.keyCode).toLowerCase();
	        switch (ch) {
	          case 'r':
	            vname = _this.graph_drawer.get_vertex_byxy(_this.mouse);
	            return _this.graph.root = vname;
	          case 'v':
	            name = _this.graph.generate_name();
	            return _this.graph.add_vertex(name, {
	              x: _this.mouse.x,
	              y: _this.mouse.y,
	              name: name
	            });
	          case 'q':
	            return cmd = prompt("Введите команду");
	          case 'd':
	            if (e.shiftKey) {
	              ref = _.clone(_this.graph.vertices);
	              for (i = 0, len = ref.length; i < len; i++) {
	                v = ref[i];
	                _this.graph.del_vertex(v);
	              }
	              return;
	            }
	            vname = _this.graph_drawer.get_vertex_byxy(_this.mouse);
	            return _this.graph.del_vertex(vname);
	          case 'l':
	            vname = _this.graph_drawer.get_vertex_byxy(_this.mouse);
	            _this.mouse.target = vname;
	            return _this.mouse.dragtype = "link";
	          case '1':
	            return console.log(_this.mouse);
	        }
	      };
	    })(this));
	  };
	
	  CanvasGraphConstructor.prototype.update = function(dt) {};
	
	  CanvasGraphConstructor.prototype.draw_draglink = function() {
	    var v;
	    if ((this.mouse.target != null) && this.mouse.dragtype === "link" && (this.mouse.linkend != null)) {
	      v = this.graph.get_vinfo(this.mouse.target);
	      return utils.draw_line(this.ctx, v, this.mouse);
	    }
	  };
	
	  CanvasGraphConstructor.prototype.render = function() {
	    this.ctx.clearRect(0, 0, this.can.width, this.can.height);
	    this.draw_draglink();
	    return this.graph_drawer.render();
	  };
	
	  return CanvasGraphConstructor;

	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	var dist, draw_circle_with_text, draw_line, get_mousepos_in_element, make_talbe, vec2;
	
	dist = function(a, b) {
	  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
	};
	
	vec2 = function(x, y) {
	  return {
	    x: x,
	    y: y
	  };
	};
	
	get_mousepos_in_element = function(el, e) {
	  var offset;
	  offset = $(el).offset();
	  return {
	    x: e.pageX - offset.left,
	    y: e.pageY - offset.top
	  };
	};
	
	make_talbe = function(arr, o) {
	  var cell, i, j, k, l, len, len1, line, t, tbl, tr, val;
	  if (o == null) {
	    o = {};
	  }
	  tbl = document.createElement('table');
	  for (i = k = 0, len = arr.length; k < len; i = ++k) {
	    line = arr[i];
	    tr = document.createElement('tr');
	    for (j = l = 0, len1 = line.length; l < len1; j = ++l) {
	      val = line[j];
	      t = o.header && i === 0 ? 'th' : 'td';
	      cell = document.createElement(t);
	      val = arr[i][j];
	      if (_.isString(val)) {
	        cell.innerHTML = val;
	      } else {
	        cell.appendChild(val);
	      }
	      tr.appendChild(cell);
	    }
	    tbl.appendChild(tr);
	  }
	  return tbl;
	};
	
	draw_line = function(ctx, a, b) {
	  ctx.beginPath();
	  ctx.moveTo(a.x, a.y);
	  ctx.lineTo(b.x, b.y);
	  return ctx.stroke();
	};
	
	draw_circle_with_text = function(ctx, x, y, r, text, o) {
	  ctx.font = o.fontsz + "px " + o.fontFamily;
	  ctx.beginPath();
	  ctx.arc(x, y, r, 0, 2 * Math.PI);
	  ctx.fillStyle = o.circleColor;
	  ctx.fill();
	  ctx.fillStyle = o.textColor;
	  ctx.textAlign = 'center';
	  ctx.textBaseLine = 'middle';
	  return ctx.fillText(text, x, y + o.fontsz / 4);
	};
	
	module.exports = {
	  dist: dist,
	  vec2: vec2,
	  get_mousepos_in_element: get_mousepos_in_element,
	  make_talbe: make_talbe,
	  draw_line: draw_line,
	  draw_circle_with_text: draw_circle_with_text
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var FONTSZ, GraphDrawer, RADIIUS, utils;
	
	utils = __webpack_require__(2);
	
	FONTSZ = 20;
	
	RADIIUS = FONTSZ;
	
	module.exports = GraphDrawer = (function() {
	  function GraphDrawer(graph, ctx) {
	    this.graph = graph;
	    this.ctx = ctx;
	  }
	
	  GraphDrawer.prototype.get_vertex_byxy = function(pos) {
	    var info, name, ref;
	    ref = this.graph.vinfo;
	    for (name in ref) {
	      info = ref[name];
	      if (utils.dist(pos, info) < RADIIUS) {
	        return name;
	      }
	    }
	  };
	
	  GraphDrawer.prototype.move_vertex = function(vertex_name, new_pos) {
	    return this.graph.set_vinfo(vertex_name, new_pos);
	  };
	
	  GraphDrawer.prototype.draw_links = function() {
	    var a, b, i, l, len, ref, results;
	    ref = this.graph.links;
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      l = ref[i];
	      a = this.graph.get_vinfo(l.from);
	      b = this.graph.get_vinfo(l.to);
	      results.push(utils.draw_line(this.ctx, a, b));
	    }
	    return results;
	  };
	
	  GraphDrawer.prototype.draw_vertices = function() {
	    var info, name, ref, results, textColor;
	    ref = this.graph.vinfo;
	    results = [];
	    for (name in ref) {
	      info = ref[name];
	      textColor = this.graph.is_root(name) ? 'red' : 'white';
	      results.push(utils.draw_circle_with_text(this.ctx, info.x, info.y, RADIIUS, name, {
	        fontsz: FONTSZ,
	        fontFamily: 'Monospace',
	        circleColor: 'black',
	        textColor: textColor
	      }));
	    }
	    return results;
	  };
	
	  GraphDrawer.prototype.render = function() {
	    this.ctx.save();
	    this.draw_links();
	    this.draw_vertices();
	    return this.ctx.restore();
	  };
	
	  return GraphDrawer;

	})();


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Graph,
	  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	module.exports = Graph = (function() {
	  function Graph() {
	    this.vertices = [];
	    this.links = [];
	    this.map = {};
	    this.vinfo = {};
	    this.change_listeners = [];
	    this.freenames = [];
	    this.root = null;
	  }
	
	  Graph.prototype.is_root = function(v) {
	    return v === this.root;
	  };
	
	  Graph.prototype.set_root = v(function(r) {
	    if (r === this.root) {
	      return;
	    }
	    this.root = r;
	    return this.changed();
	  });
	
	  Graph.prototype.make_dfs_info = function() {};
	
	  Graph.prototype.on_change = function(callback) {
	    return this.change_listeners.push(callback);
	  };
	
	  Graph.prototype.changed = function() {
	    var callback, i, len, ref, results;
	    ref = this.change_listeners;
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      callback = ref[i];
	      results.push(callback(this));
	    }
	    return results;
	  };
	
	  Graph.prototype.generate_name = function() {
	    var res, v;
	    this.freenames.sort(function(a, b) {
	      return a - b;
	    });
	    res = "";
	    while (this.freenames.length > 0) {
	      v = "" + this.freenames.shift();
	      if (!this.is_vertex(v)) {
	        return v;
	      }
	    }
	    return "" + this.count_vertices();
	  };
	
	  Graph.prototype.count_vertices = function() {
	    return this.vertices.length;
	  };
	
	  Graph.prototype.is_vertex = function(name) {
	    return indexOf.call(this.vertices, name) >= 0;
	  };
	
	  Graph.prototype.get_vinfo = function(name) {
	    return this.vinfo[name];
	  };
	
	  Graph.prototype.set_vinfo = function(name, info) {
	    var k, results, v;
	    if (this.vinfo[name] == null) {
	      this.vinfo[name] = info;
	      return;
	    }
	    if (info != null) {
	      results = [];
	      for (k in info) {
	        v = info[k];
	        results.push(this.vinfo[name][k] = v);
	      }
	      return results;
	    }
	  };
	
	  Graph.prototype.add_vertex = function(name, info, call_changed) {
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    this.set_vinfo(name, info);
	    if (this.is_vertex(name)) {
	      return;
	    }
	    this.vertices.push(name);
	    this.map[name] = {};
	    if (this.root == null) {
	      this.root = name;
	    }
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.del_vertex = function(name, call_changed) {
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    if (!this.is_vertex(name)) {
	      return;
	    }
	    _.pull(this.vertices, name);
	    delete this.vinfo[name];
	    this.freenames.push(parseInt(name));
	    this.del_links_with_vertex(name, false);
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.count_links = function() {
	    return this.links.length;
	  };
	
	  Graph.prototype._make_link = function(v1, v2) {
	    var arr;
	    arr = [v1, v2].sort();
	    return {
	      from: arr[0],
	      to: arr[1]
	    };
	  };
	
	  Graph.prototype.add_link = function(v1, v2, call_changed) {
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    if (this.is_link(v1, v2)) {
	      return;
	    }
	    this.links.push(this._make_link(v1, v2));
	    this.map[v1][v2] = this.map[v2][v1] = true;
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.del_link = function(v1, v2, call_changed) {
	    var p;
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    p = function(l) {
	      return (l.from === v1 && l.to === v2) || (l.from === v2 && l.to === v1);
	    };
	    return this.del_linkp(p, call_changed);
	  };
	
	  Graph.prototype.del_links_with_vertex = function(v, call_changed) {
	    var p;
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    p = function(l) {
	      return indexOf.call(_.values(l), v) >= 0;
	    };
	    return this.del_linkp(p, call_changed);
	  };
	
	  Graph.prototype.del_link_from_map = function(v1, v2, call_changed) {
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    this.map[v1][v2] = this.map[v2][v1] = false;
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.del_linkp = function(predicate, call_changed) {
	    var i, l, len, ref, res;
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    res = [];
	    ref = this.links;
	    for (i = 0, len = ref.length; i < len; i++) {
	      l = ref[i];
	      if (predicate(l)) {
	        this.del_link_from_map(l.from, l.to, false);
	      } else {
	        res.push(l);
	      }
	    }
	    this.links = res;
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.is_link = function(v1, v2) {
	    return !!this.map[v1][v2];
	  };
	
	  return Graph;

	})();


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Graph;
	
	Graph = __webpack_require__(4);
	
	
	/*
	example for builder1:
	options
	    vertices:
	        0: x: 100, y: 100
	        1: x: 50, y: 50
	        2: x: 150, y: 50
	    links:
	        0: [1, 2]
	 */
	
	module.exports.builder1 = function(options) {
	  var a, arr, b, g, i, info, len, name, ref, ref1;
	  g = new Graph;
	  ref = options.vertices;
	  for (name in ref) {
	    info = ref[name];
	    g.add_vertex("" + name, info);
	  }
	  ref1 = options.links;
	  for (a in ref1) {
	    arr = ref1[a];
	    for (i = 0, len = arr.length; i < len; i++) {
	      b = arr[i];
	      g.add_link("" + a, "" + b);
	    }
	  }
	  return g;
	};
	
	module.exports.make_options_for_builder1 = function(graph) {
	  var from, i, len, links, ref, ref1, to, vertices;
	  vertices = _.clone(graph.vinfo);
	  links = {};
	  ref = graph.links;
	  for (i = 0, len = ref.length; i < len; i++) {
	    ref1 = ref[i], from = ref1.from, to = ref1.to;
	    if (links[from] == null) {
	      links[from] = [];
	    }
	    links[from].push(to);
	  }
	  return {
	    vertices: vertices,
	    links: links
	  };
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var CanvasGraphConstructor, Graph, GraphInfo, GraphTable, counter, utils;
	
	Graph = __webpack_require__(4);
	
	utils = __webpack_require__(2);
	
	CanvasGraphConstructor = __webpack_require__(1);
	
	GraphInfo = __webpack_require__(7);
	
	counter = 0;
	
	module.exports = GraphTable = (function() {
	  function GraphTable(container, graph) {
	    var div_for_constructor, div_for_graph_info;
	    this.container = container;
	    this.graph = graph != null ? graph : new Graph;
	    this.id = "gt" + counter++;
	    div_for_constructor = $("<div>").attr('id', this.id + "gb").get(0);
	    div_for_graph_info = $("<div>").attr('id', this.id + "info").get(0);
	    this.el = utils.make_talbe([['Рисунок графа', 'Информация о графе'], [div_for_constructor, div_for_graph_info]], {
	      header: true
	    });
	    $(this.container).append(this.el);
	    this.gb = new CanvasGraphConstructor(div_for_constructor, this.graph);
	    this.gi = new GraphInfo(div_for_graph_info, this.graph);
	  }
	
	  GraphTable.prototype.update = function() {
	    if (this.gb.update != null) {
	      return this.gb.update();
	    }
	  };
	
	  GraphTable.prototype.render = function() {
	    return this.gb.render();
	  };
	
	  return GraphTable;

	})();


/***/ },
/* 7 */
/***/ function(module, exports) {

	var GraphInfo, counter;
	
	counter = 0;
	
	module.exports = GraphInfo = (function() {
	  function GraphInfo(container, graph) {
	    var id, o, ref;
	    this.container = container;
	    this.graph = graph != null ? graph : new Graph;
	    if (_.isString(this.container)) {
	      this.container = $(this.container).get(0);
	    }
	    this.id = "graphinfo" + counter++;
	    this.el = $("<div>").get(0);
	    $(this.container).append(this.el);
	    this.info = {
	      "count_vertices": {
	        title: "Количество вершин:",
	        func: (function(_this) {
	          return function() {
	            return _this.graph.count_vertices();
	          };
	        })(this)
	      },
	      "count_links": {
	        title: "Количество ребер:",
	        func: (function(_this) {
	          return function() {
	            return _this.graph.count_links();
	          };
	        })(this)
	      },
	      "invariant3": {
	        title: "Инвариант 3:",
	        func: (function(_this) {
	          return function() {
	            return _this.invariant3();
	          };
	        })(this)
	      }
	    };
	    ref = this.info;
	    for (id in ref) {
	      o = ref[id];
	      $(this.el).append($("<div><u>" + o.title + "</u> <span id=" + (this.id + id) + "></span></div>"));
	    }
	    this.graph.on_change((function(_this) {
	      return function() {
	        return _this.update_info();
	      };
	    })(this));
	    this.update_info();
	  }
	
	  GraphInfo.prototype.invariant3 = function() {
	    var res;
	    res = JSON.stringify(res, null, 2);
	    return $("<pre>" + res + "</pre>");
	  };
	
	  GraphInfo.prototype.update_info = function() {
	    var id, o, ref, res, results;
	    ref = this.info;
	    results = [];
	    for (id in ref) {
	      o = ref[id];
	      id = this.id + id;
	      res = o.func();
	      $('#' + id).html("");
	      results.push($('#' + id).append(res));
	    }
	    return results;
	  };
	
	  return GraphInfo;

	})();


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjgzYWNlZmFiYTA3MzgxNzI5MDUiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3Rvci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMuY29mZmVlIiwid2VicGFjazovLy8uL0dyYXBoRHJhd2VyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vR3JhcGhCdWlsZGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaFRhYmxlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaEluZm8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDckNBOztBQUFBLDBCQUF5QixvQkFBUSxDQUFSOztBQUN6QixnQkFBZSxvQkFBUSxDQUFSOztBQUNmLGNBQWEsb0JBQVEsQ0FBUjs7QUFHYixvQkFBbUI7O0FBR25CLFlBQVc7QUFDUDtHQUFBLE9BQU8sSUFBSSxDQUFDLEdBQUw7R0FDUCxLQUFLO0dBQ0wsT0FBTztBQUNIO0tBQUEsU0FBUyxJQUFJLENBQUMsR0FBTCxLQUFhO0tBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUw7S0FDUCxTQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBVCxFQUFpQixJQUFqQjtBQUNULFlBQU0sU0FBUyxDQUFmO0FBQ0k7O1NBQ0ksSUFBaUIsa0JBQWpCO1dBQUEsR0FBRyxDQUFDLE1BQUosQ0FBVyxFQUFYOztBQURKO09BRUEsVUFBVTtLQUhkO0FBSUE7O09BQ0ksSUFBZ0Isa0JB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O1FBSko7T0FNQSxjQUNJO1NBQUEsT0FBTyxjQUFQO1NBQ0EsTUFBTTtrQkFBQTtvQkFBRyxLQUFDLFdBQUQ7V0FBSDtTQUFBLFFBRE47UUFQSjs7QUFVSjtBQUFBOztPQUNJLEVBQUUsSUFBQyxHQUFILENBQU0sQ0FBQyxNQUFQLENBQWMsRUFBRSxhQUFXLENBQUMsQ0FBQyxLQUFiLEdBQW1CLGdCQUFuQixHQUFrQyxDQUFDLElBQUMsR0FBRCxHQUFJLEVBQUwsQ0FBbEMsR0FBMEMsZ0JBQTVDLENBQWQ7QUFESjtLQUVBLElBQUMsTUFBSyxDQUFDLFNBQVAsQ0FBaUI7Y0FBQTtnQkFBRyxLQUFDLFlBQUQ7T0FBSDtLQUFBLFFBQWpCO0tBQ0EsSUFBQyxZQUFEO0dBbkJTOzt1QkFxQmIsYUFBWTtBQUVSO0tBQUEsTUFBTSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsRUFBb0IsSUFBcEIsRUFBMEIsQ0FBMUI7QUFDTixZQUFPLEVBQUUsVUFBUSxHQUFSLEdBQVksUUFBZDtHQUhDOzt1QkFLWixjQUFhO0FBQ1Q7QUFBQTtBQUFBO1VBQUE7O09BQ0ksS0FBSyxJQUFDLEdBQUQsR0FBTTtPQUNYLE1BQU0sQ0FBQyxDQUFDLElBQUY7T0FDTixFQUFFLE1BQUksRUFBTixDQUFTLENBQUMsSUFBVixDQUFlLEVBQWY7b0JBQ0EsRUFBRSxNQUFJLEVBQU4sQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsR0FBakI7QUFKSjs7R0FEUyIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGY4M2FjZWZhYmEwNzM4MTcyOTA1XG4gKiovIiwiXHJcbkNhbnZhc0dyYXBoQ29uc3RydWN0b3IgPSByZXF1aXJlICcuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3InXHJcbkdyYXBoQnVpbGRlciA9IHJlcXVpcmUgJy4vR3JhcGhCdWlsZGVyJ1xyXG5HcmFwaFRhYmxlID0gcmVxdWlyZSAnLi9HcmFwaFRhYmxlJ1xyXG5cclxuXHJcbm1haW5sb29wX29iamVjdHMgPSBbXVxyXG5cclxuXHJcbm1haW5sb29wID0gLT5cclxuICAgIHRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICBkdCA9IDE0XHJcbiAgICBzdGVwID0gLT5cclxuICAgICAgICBjdXJfZHQgPSBEYXRlLm5vdygpIC0gdGltZVxyXG4gICAgICAgIHRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgY3VyX2R0ID0gTWF0aC5taW4oY3VyX2R0LCAxMDAwKVxyXG4gICAgICAgIHdoaWxlIGN1cl9kdCA+IDBcclxuICAgICAgICAgICAgZm9yIG9iaiBpbiBtYWlubG9vcF9vYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvYmoudXBkYXRlIGR0IGlmIG9iai51cGRhdGU/IFxyXG4gICAgICAgICAgICBjdXJfZHQgLT0gZHRcclxuICAgICAgICBmb3Igb2JqIGluIG1haW5sb29wX29iamVjdHNcclxuICAgICAgICAgICAgb2JqLnJlbmRlcigpIGlmIG9iai5yZW5kZXI/XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHN0ZXBcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBzdGVwXHJcblxyXG5tYWlubG9vcCgpXHJcblxyXG5cclxuXHJcbiMgSlNPTi5zdHJpbmdpZnkoR3JhcGhCdWlsZGVyLm1ha2Vfb3B0aW9uc19mb3JfYnVpbGRlcjEoZ2IxLmdyYXBoKSwgbnVsbClcclxuZzEgPSBHcmFwaEJ1aWxkZXIuYnVpbGRlcjEge1widmVydGljZXNcIjp7XCIwXCI6e1wieFwiOjE5OCxcInlcIjozNzUuMTg3NX0sXCIxXCI6e1wieFwiOjkzLFwieVwiOjMyNi4xODc1fSxcIjJcIjp7XCJ4XCI6MzAyLFwieVwiOjMzOC4xODc1fSxcIjNcIjp7XCJ4XCI6NDMsXCJ5XCI6MjUwLjE4NzUsXCJuYW1lXCI6XCIzXCJ9LFwiNFwiOntcInhcIjoxNTQsXCJ5XCI6MjQ3LjE4NzUsXCJuYW1lXCI6XCI0XCJ9LFwiNVwiOntcInhcIjozMDAsXCJ5XCI6MjcyLjE4NzUsXCJuYW1lXCI6XCI1XCJ9LFwiNlwiOntcInhcIjoyNjEsXCJ5XCI6MjA4LjE4NzUsXCJuYW1lXCI6XCI2XCJ9LFwiN1wiOntcInhcIjozNTQsXCJ5XCI6MjI5LjE4NzUsXCJuYW1lXCI6XCI3XCJ9LFwiOFwiOntcInhcIjoxMDMsXCJ5XCI6MTcwLjE4NzUsXCJuYW1lXCI6XCI4XCJ9LFwiOVwiOntcInhcIjozNyxcInlcIjo1OC4xODc1LFwibmFtZVwiOlwiOVwifSxcIjEwXCI6e1wieFwiOjExMyxcInlcIjo2Mi4xODc1LFwibmFtZVwiOlwiMTBcIn0sXCIxMVwiOntcInhcIjoxOTQsXCJ5XCI6NjAuMTg3NSxcIm5hbWVcIjpcIjExXCJ9LFwiMTJcIjp7XCJ4XCI6MzI3LFwieVwiOjE4My4xODc1LFwibmFtZVwiOlwiMTJcIn0sXCIxM1wiOntcInhcIjozNjEsXCJ5XCI6MTQ1LjE4NzUsXCJuYW1lXCI6XCIxM1wifSxcIjE0XCI6e1wieFwiOjMyMCxcInlcIjoxMTMuMTg3NSxcIm5hbWVcIjpcIjE0XCJ9LFwiMTVcIjp7XCJ4XCI6MzU3LFwieVwiOjc3LjE4NzUsXCJuYW1lXCI6XCIxNVwifSxcIjE2XCI6e1wieFwiOjMxNyxcInlcIjo0Ni4xODc1LFwibmFtZVwiOlwiMTZcIn19LFwibGlua3NcIjp7XCIwXCI6W1wiMVwiLFwiMlwiXSxcIjFcIjpbXCIzXCIsXCI0XCJdLFwiMlwiOltcIjVcIl0sXCIzXCI6W1wiOFwiXSxcIjVcIjpbXCI2XCIsXCI3XCJdLFwiOFwiOltcIjlcIl0sXCIxMFwiOltcIjhcIl0sXCIxMVwiOltcIjhcIl0sXCIxMlwiOltcIjdcIixcIjEzXCJdLFwiMTNcIjpbXCIxNFwiXSxcIjE0XCI6W1wiMTVcIl0sXCIxNVwiOltcIjE2XCJdfX1cclxuZzIgPSBHcmFwaEJ1aWxkZXIuYnVpbGRlcjEge1widmVydGljZXNcIjp7XCIwXCI6e1wieFwiOjE5MSxcInlcIjozODAuMzc1LFwibmFtZVwiOlwiMFwifSxcIjFcIjp7XCJ4XCI6NTAsXCJ5XCI6MzIwLjM3NSxcIm5hbWVcIjpcIjFcIn0sXCIyXCI6e1wieFwiOjMwOSxcInlcIjozMDMuMzc1LFwibmFtZVwiOlwiMlwifSxcIjNcIjp7XCJ4XCI6NjgsXCJ5XCI6MTkwLjM3NSxcIm5hbWVcIjpcIjNcIn0sXCI0XCI6e1wieFwiOjMwNixcInlcIjoxODAuMzc1LFwibmFtZVwiOlwiNFwifSxcIjVcIjp7XCJ4XCI6NjUsXCJ5XCI6NzEuMzc1LFwibmFtZVwiOlwiNVwifSxcIjZcIjp7XCJ4XCI6MTg0LFwieVwiOjE4Ny4zNzUsXCJuYW1lXCI6XCI2XCJ9LFwiN1wiOntcInhcIjoyNjYsXCJ5XCI6ODkuMzc1LFwibmFtZVwiOlwiN1wifSxcIjhcIjp7XCJ4XCI6MzUyLFwieVwiOjgyLjM3NSxcIm5hbWVcIjpcIjhcIn0sXCI5XCI6e1wieFwiOjE3NyxcInlcIjoyOTcuMzc1LFwibmFtZVwiOlwiOVwifX0sXCJsaW5rc1wiOntcIjBcIjpbXCIyXCIsXCIxXCIsXCI5XCJdLFwiMVwiOltcIjNcIl0sXCIyXCI6W1wiNFwiXSxcIjNcIjpbXCI1XCJdLFwiNFwiOltcIjdcIixcIjhcIl0sXCI2XCI6W1wiOVwiXX19XHJcblxyXG5ndCA9IFtuZXcgR3JhcGhUYWJsZShcIiNndDFcIiwgZzEpLCBuZXcgR3JhcGhUYWJsZSBcIiNndDJcIiwgZzJdXHJcbm1haW5sb29wX29iamVjdHMgPSBtYWlubG9vcF9vYmplY3RzLmNvbmNhdCBndFxyXG5cclxuXHJcbnByZyA9IChpKSAtPiBjb25zb2xlLmxvZyBKU09OLnN0cmluZ2lmeShHcmFwaEJ1aWxkZXIubWFrZV9vcHRpb25zX2Zvcl9idWlsZGVyMShndFtpXS5ncmFwaCkpXHJcblxyXG5cclxuXHJcbl8uZGVmYXVsdHMgd2luZG93LCB7R3JhcGhCdWlsZGVyLCBwcmcsIGd0fVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21haW4uY29mZmVlXG4gKiovIiwiXHJcbnV0aWxzID0gcmVxdWlyZSAnLi91dGlscydcclxuR3JhcGhEcmF3ZXIgPSByZXF1aXJlICcuL0dyYXBoRHJhd2VyJ1xyXG5HcmFwaCA9IHJlcXVpcmUgJy4vR3JhcGgnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFxyXG5jbGFzcyBDYW52YXNHcmFwaENvbnN0cnVjdG9yXHJcblxyXG4gICAgY29uc3RydWN0b3I6IChAY29udGFpbmVyLCBAZ3JhcGggPSBuZXcgR3JhcGgpIC0+XHJcbiAgICAgICAgQGNhbiA9ICQoXCI8Y2FudmFzPlwiKS5nZXQgMFxyXG4gICAgICAgIEBjdHggPSBAY2FuLmdldENvbnRleHQgJzJkJ1xyXG4gICAgICAgIEBjYW4ud2lkdGggPSBAY2FuLmhlaWdodCA9IDQwMFxyXG4gICAgICAgIEBtb3VzZSA9IHsgXHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDAgIyDRgtC10LrRg9GJ0LjQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvNGL0YjQuCDQvdCw0LQgQGNhblxyXG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwgIyDQuNC80Y8g0LLQtdGA0YjQuNC90Ysg0L3QsNC0INC60L7RgtC+0YDQvtC5INC/0YDQvtC40LfQstC+0LTQuNGC0YHRjyDQvdC10LrQvtGC0L7RgNC+0LUg0LTQtdC50YHRgtCy0LjQtVxyXG4gICAgICAgIH1cclxuICAgICAgICBAZm9jdXMgPSBmYWxzZVxyXG4gICAgICAgIEBoYW5kbGVfZXZlbnRzKClcclxuICAgICAgICAkKEBjb250YWluZXIpLmFwcGVuZCBAY2FuXHJcbiAgICAgICAgQGdyYXBoX2RyYXdlciA9IG5ldyBHcmFwaERyYXdlciBAZ3JhcGgsIEBjdHhcclxuXHJcbiAgICB1cGRhdGVfbW91c2U6IChlKSAtPlxyXG4gICAgICAgIHBvcyA9IHV0aWxzLmdldF9tb3VzZXBvc19pbl9lbGVtZW50IEBjYW4sIGVcclxuICAgICAgICBAbW91c2UueCA9IHBvcy54XHJcbiAgICAgICAgQG1vdXNlLnkgPSBwb3MueVxyXG5cclxuICAgIGhhbmRsZV9ldmVudHM6IC0+XHJcbiAgICAgICAgJChAY2FuKS5tb3VzZW91dCA9PiBAZm9jdXMgPSBmYWxzZVxyXG4gICAgICAgICQoQGNhbikubW91c2VvdmVyID0+IEBmb2N1cyA9IHRydWVcclxuICAgICAgICBcclxuICAgICAgICAkKEBjYW4pLm1vdXNlbW92ZSAoZSkgPT5cclxuICAgICAgICAgICAgQHVwZGF0ZV9tb3VzZSBlXHJcbiAgICAgICAgICAgIGlmIEBtb3VzZS50YXJnZXRcclxuICAgICAgICAgICAgICAgIGlmIEBtb3VzZS5kcmFndHlwZSA9PSBcIm1vdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleF9uYW1lID0gQG1vdXNlLnRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5zZXRfdmluZm8gdmVydGV4X25hbWUsIHV0aWxzLnZlYzIoQG1vdXNlLngsIEBtb3VzZS55KVxyXG4gICAgICAgICAgICAgICAgaWYgQG1vdXNlLmRyYWd0eXBlID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgQG1vdXNlLmxpbmtlbmQgPSBfLmNsb25lIHV0aWxzLnZlYzIgQG1vdXNlLngsIEBtb3VzZS55XHJcblxyXG4gICAgICAgICQoQGNhbikubW91c2Vkb3duIChlKSA9PlxyXG4gICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxyXG4gICAgICAgICAgICBpZiB2bmFtZT8gYW5kIEBtb3VzZS50YXJnZXQ/IGFuZCBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgIEBncmFwaC5hZGRfbGluayBAbW91c2UudGFyZ2V0LCB2bmFtZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIEBtb3VzZS50YXJnZXQgPSB2bmFtZVxyXG4gICAgICAgICAgICBAbW91c2UuZHJhZ3R5cGUgPSBcIm1vdmVcIlxyXG5cclxuICAgICAgICAkKEBjYW4pLm1vdXNldXAgKGUpID0+XHJcbiAgICAgICAgICAgIEBtb3VzZS50YXJnZXQgPSBudWxsXHJcbiAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IG51bGxcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkua2V5ZG93biAoZSkgPT5cclxuICAgICAgICAgICAgcmV0dXJuIHVubGVzcyBAZm9jdXNcclxuICAgICAgICAgICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICBzd2l0Y2ggY2hcclxuICAgICAgICAgICAgICAgICMgU2V0IG5ldyByb290XHJcbiAgICAgICAgICAgICAgICB3aGVuICdyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZuYW1lID0gQGdyYXBoX2RyYXdlci5nZXRfdmVydGV4X2J5eHkgQG1vdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLnJvb3QgPSB2bmFtZVxyXG5cclxuICAgICAgICAgICAgICAgICMgQWRkIHZlcnRleFxyXG4gICAgICAgICAgICAgICAgd2hlbiAndidcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gQGdyYXBoLmdlbmVyYXRlX25hbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5hZGRfdmVydGV4IG5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogQG1vdXNlLngsIHk6IEBtb3VzZS55LCBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICMgUXVlcnkgZm9yIGdyYXBoXHJcbiAgICAgICAgICAgICAgICB3aGVuICdxJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNtZCA9IHByb21wdChcItCS0LLQtdC00LjRgtC1INC60L7QvNCw0L3QtNGDXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgIyBEZWxldGUgdmVydGV4XHJcbiAgICAgICAgICAgICAgICB3aGVuICdkJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIGUuc2hpZnRLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHYgaW4gXy5jbG9uZSBAZ3JhcGgudmVydGljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBncmFwaC5kZWxfdmVydGV4IHZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcclxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGguZGVsX3ZlcnRleCB2bmFtZVxyXG5cclxuICAgICAgICAgICAgICAgICMgQWRkIGxpbmtcclxuICAgICAgICAgICAgICAgIHdoZW4gJ2wnXHJcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UudGFyZ2V0ID0gdm5hbWVcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UuZHJhZ3R5cGUgPSBcImxpbmtcIlxyXG5cclxuICAgICAgICAgICAgICAgICMgUHJpbnQgb3RoZXIgaW5mb1xyXG4gICAgICAgICAgICAgICAgd2hlbiAnMSdcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyBAbW91c2VcclxuXHJcbiAgICB1cGRhdGU6IChkdCkgLT5cclxuXHJcbiAgICBkcmF3X2RyYWdsaW5rOiAtPlxyXG4gICAgICAgIGlmIEBtb3VzZS50YXJnZXQ/IGFuZCBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCIgYW5kIEBtb3VzZS5saW5rZW5kP1xyXG4gICAgICAgICAgICB2ID0gQGdyYXBoLmdldF92aW5mbyBAbW91c2UudGFyZ2V0XHJcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfbGluZSBAY3R4LCB2LCBAbW91c2VcclxuXHJcbiAgICByZW5kZXI6IC0+XHJcbiAgICAgICAgQGN0eC5jbGVhclJlY3QgMCwgMCwgQGNhbi53aWR0aCwgQGNhbi5oZWlnaHRcclxuICAgICAgICBAZHJhd19kcmFnbGluaygpXHJcbiAgICAgICAgQGdyYXBoX2RyYXdlci5yZW5kZXIoKVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DYW52YXNHcmFwaENvbnN0cnVjdG9yLmNvZmZlZVxuICoqLyIsIlxyXG4jID09PT09IG1hdGhzIHV0aWxzID09PT09XHJcbmRpc3QgPSAoYSwgYikgLT4gTWF0aC5zcXJ0KE1hdGgucG93KGEueCAtIGIueCwgMikgKyBNYXRoLnBvdyhhLnkgLSBiLnksIDIpKVxyXG52ZWMyID0gKHgsIHkpIC0+IHt4LCB5fVxyXG5cclxuIyA9PT09PSB1dGlscyBmb3IgaHRtbCBlbGVtZW50cyA9PT09PSBcclxuZ2V0X21vdXNlcG9zX2luX2VsZW1lbnQgPSAoZWwsIGUpIC0+XHJcbiAgICBvZmZzZXQgPSAkKGVsKS5vZmZzZXQoKVxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgeDogZS5wYWdlWCAtIG9mZnNldC5sZWZ0LCBcclxuICAgICAgICB5OiBlLnBhZ2VZIC0gb2Zmc2V0LnRvcCBcclxuICAgIH1cclxuXHJcbiMgY3JlYXRlIGh0bWwgdGFibGUgYnkganMgbWF0cml4XHJcbiMgbzogeyBoZWFkZXI6IGJvb2wgfVxyXG5tYWtlX3RhbGJlID0gKGFyciwgbyA9IHt9KSAtPlxyXG4gICAgdGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAndGFibGUnXHJcbiAgICBmb3IgbGluZSwgaSBpbiBhcnJcclxuICAgICAgICB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3RyJ1xyXG4gICAgICAgIGZvciB2YWwsIGogaW4gbGluZVxyXG4gICAgICAgICAgICB0ID0gaWYgby5oZWFkZXIgYW5kIGkgPT0gMCB0aGVuICd0aCcgZWxzZSAndGQnXHJcbiAgICAgICAgICAgIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IHRcclxuICAgICAgICAgICAgdmFsID0gYXJyW2ldW2pdXHJcbiAgICAgICAgICAgIGlmIF8uaXNTdHJpbmcgdmFsXHJcbiAgICAgICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IHZhbFxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkIHZhbFxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCBjZWxsXHJcbiAgICAgICAgdGJsLmFwcGVuZENoaWxkIHRyXHJcbiAgICByZXR1cm4gdGJsXHJcblxyXG4jID09PT09IEdyYXBoaWNzID09PT09XHJcbmRyYXdfbGluZSA9IChjdHgsIGEsIGIpIC0+XHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5tb3ZlVG8gYS54LCBhLnlcclxuICAgIGN0eC5saW5lVG8gYi54LCBiLnlcclxuICAgIGN0eC5zdHJva2UoKVxyXG5cclxuZHJhd19jaXJjbGVfd2l0aF90ZXh0ID0gKGN0eCwgeCwgeSwgciwgdGV4dCwgbykgLT5cclxuICAgIGN0eC5mb250ID0gXCIje28uZm9udHN6fXB4ICN7by5mb250RmFtaWx5fVwiXHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5hcmMgeCwgeSwgciwgMCwgMiAqIE1hdGguUElcclxuICAgIGN0eC5maWxsU3R5bGUgPSBvLmNpcmNsZUNvbG9yXHJcbiAgICBjdHguZmlsbCgpXHJcbiAgICBjdHguZmlsbFN0eWxlID0gby50ZXh0Q29sb3JcclxuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xyXG4gICAgY3R4LnRleHRCYXNlTGluZSA9ICdtaWRkbGUnXHJcbiAgICBjdHguZmlsbFRleHQgdGV4dCwgeCwgeSArIG8uZm9udHN6LzRcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICMgbWF0aCB1dGlsc1xyXG4gICAgZGlzdCwgdmVjMlxyXG4gICAgIyBodG1sIHV0aWxzXHJcbiAgICBnZXRfbW91c2Vwb3NfaW5fZWxlbWVudCwgbWFrZV90YWxiZVxyXG4gICAgIyBHcmFwaGljc1xyXG4gICAgZHJhd19saW5lLCBkcmF3X2NpcmNsZV93aXRoX3RleHRcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3V0aWxzLmNvZmZlZVxuICoqLyIsIlxyXG51dGlscyA9IHJlcXVpcmUgJy4vdXRpbHMnXHJcblxyXG5cclxuRk9OVFNaID0gMjBcclxuUkFESUlVUyA9IEZPTlRTWlxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIEdyYXBoRHJhd2VyXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yOiAoQGdyYXBoLCBAY3R4KSAtPlxyXG5cclxuICAgICMgPT09IFZFUlRJQ0VTID09PSBcclxuICAgIGdldF92ZXJ0ZXhfYnl4eTogKHBvcykgLT5cclxuICAgICAgICBmb3IgbmFtZSwgaW5mbyBvZiBAZ3JhcGgudmluZm9cclxuICAgICAgICAgICAgcmV0dXJuIG5hbWUgaWYgdXRpbHMuZGlzdChwb3MsIGluZm8pIDwgUkFESUlVU1xyXG5cclxuICAgIG1vdmVfdmVydGV4OiAodmVydGV4X25hbWUsIG5ld19wb3MpIC0+XHJcbiAgICAgICAgQGdyYXBoLnNldF92aW5mbyB2ZXJ0ZXhfbmFtZSwgbmV3X3Bvc1xyXG5cclxuICAgICMgPT09IFJFTkRFUiA9PT1cclxuICAgIGRyYXdfbGlua3M6ICgpIC0+XHJcbiAgICAgICAgZm9yIGwgaW4gQGdyYXBoLmxpbmtzXHJcbiAgICAgICAgICAgIGEgPSBAZ3JhcGguZ2V0X3ZpbmZvIGwuZnJvbVxyXG4gICAgICAgICAgICBiID0gQGdyYXBoLmdldF92aW5mbyBsLnRvXHJcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfbGluZSBAY3R4LCBhLCBiXHJcblxyXG4gICAgZHJhd192ZXJ0aWNlczogKCkgLT5cclxuICAgICAgICBmb3IgbmFtZSwgaW5mbyBvZiBAZ3JhcGgudmluZm9cclxuICAgICAgICAgICAgdGV4dENvbG9yID0gaWYgQGdyYXBoLmlzX3Jvb3QgbmFtZSB0aGVuICdyZWQnIGVsc2UgJ3doaXRlJ1xyXG4gICAgICAgICAgICB1dGlscy5kcmF3X2NpcmNsZV93aXRoX3RleHQoXHJcbiAgICAgICAgICAgICAgICBAY3R4LCBpbmZvLngsIGluZm8ueSwgUkFESUlVUywgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRzejogRk9OVFNaLCBmb250RmFtaWx5OiAnTW9ub3NwYWNlJyxcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGVDb2xvcjogJ2JsYWNrJywgdGV4dENvbG9yOiB0ZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgIHJlbmRlcjogKCkgLT5cclxuICAgICAgICBAY3R4LnNhdmUoKVxyXG4gICAgICAgIEBkcmF3X2xpbmtzKClcclxuICAgICAgICBAZHJhd192ZXJ0aWNlcygpXHJcbiAgICAgICAgQGN0eC5yZXN0b3JlKClcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vR3JhcGhEcmF3ZXIuY29mZmVlXG4gKiovIiwiXHJcbiMgVE9ETzog0LHQu9C+0LrQuNGA0L7QstC60LAg0Lgg0YDQsNC30LHQu9C+0LrQuNGA0L7QstC60LAgY2FsbF9jaGFuZ2VkXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFxyXG5jbGFzcyBHcmFwaFxyXG4gICAgY29uc3RydWN0b3I6IC0+XHJcbiAgICAgICAgQHZlcnRpY2VzID0gW11cclxuICAgICAgICBAbGlua3MgPSBbXVxyXG4gICAgICAgIEBtYXAgPSB7fVxyXG4gICAgICAgIEB2aW5mbyA9IHt9ICMgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBmb3IgdmVydGV4XHJcbiAgICAgICAgQGNoYW5nZV9saXN0ZW5lcnMgPSBbXVxyXG4gICAgICAgIEBmcmVlbmFtZXMgPSBbXVxyXG4gICAgICAgIEByb290ID0gbnVsbFxyXG5cclxuICAgICMgPT09IEZVTkNUSU9OUyA9PT09XHJcbiAgICBpc19yb290OiAodikgLT4gdiA9PSBAcm9vdFxyXG4gICAgc2V0X3Jvb3Q6ICh2KSAocikgLT4gXHJcbiAgICAgICAgcmV0dXJuIGlmIHIgPT0gQHJvb3RcclxuICAgICAgICBAcm9vdCA9IHJcclxuICAgICAgICBAY2hhbmdlZCgpXHJcblxyXG4gICAgbWFrZV9kZnNfaW5mbzogLT5cclxuICAgICAgICBcclxuXHJcbiAgICAjID09PSBFVkVOVFMgPT09XHJcbiAgICBvbl9jaGFuZ2U6IChjYWxsYmFjaykgLT4gXHJcbiAgICAgICAgQGNoYW5nZV9saXN0ZW5lcnMucHVzaCBjYWxsYmFja1xyXG5cclxuICAgIGNoYW5nZWQ6IC0+IFxyXG4gICAgICAgIGZvciBjYWxsYmFjayBpbiBAY2hhbmdlX2xpc3RlbmVyc1xyXG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzKVxyXG5cclxuICAgICMgPT09IFZFUlRJQ0VTID09PSBcclxuICAgIGdlbmVyYXRlX25hbWU6IC0+XHJcbiAgICAgICAgQGZyZWVuYW1lcy5zb3J0IChhLCBiKSAtPiBhIC0gYlxyXG4gICAgICAgIHJlcyA9IFwiXCJcclxuICAgICAgICB3aGlsZSBAZnJlZW5hbWVzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgdiA9IFwiXCIgKyBAZnJlZW5hbWVzLnNoaWZ0KClcclxuICAgICAgICAgICAgcmV0dXJuIHYgaWYgbm90IEBpc192ZXJ0ZXggdlxyXG4gICAgICAgIHJldHVybiBcIlwiICsgQGNvdW50X3ZlcnRpY2VzKClcclxuXHJcbiAgICBjb3VudF92ZXJ0aWNlczogLT4gQHZlcnRpY2VzLmxlbmd0aFxyXG5cclxuICAgIGlzX3ZlcnRleDogKG5hbWUpIC0+XHJcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gQHZlcnRpY2VzXHJcblxyXG4gICAgZ2V0X3ZpbmZvOiAobmFtZSkgLT4gQHZpbmZvW25hbWVdXHJcblxyXG4gICAgc2V0X3ZpbmZvOiAobmFtZSwgaW5mbykgLT5cclxuICAgICAgICB1bmxlc3MgQHZpbmZvW25hbWVdP1xyXG4gICAgICAgICAgICBAdmluZm9bbmFtZV0gPSBpbmZvXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIEB2aW5mb1tuYW1lXVtrXSA9IHYgZm9yIGssdiBvZiBpbmZvIGlmIGluZm8/XHJcblxyXG4gICAgYWRkX3ZlcnRleDogKG5hbWUsIGluZm8sIGNhbGxfY2hhbmdlZCA9IHRydWUpIC0+XHJcbiAgICAgICAgQHNldF92aW5mbyBuYW1lLCBpbmZvXHJcbiAgICAgICAgcmV0dXJuIGlmIEBpc192ZXJ0ZXggbmFtZVxyXG4gICAgICAgIEB2ZXJ0aWNlcy5wdXNoIG5hbWVcclxuICAgICAgICBAbWFwW25hbWVdID0ge31cclxuICAgICAgICBpZiBub3QgQHJvb3Q/XHJcbiAgICAgICAgICAgIEByb290ID0gbmFtZVxyXG4gICAgICAgIEBjaGFuZ2VkKCkgaWYgY2FsbF9jaGFuZ2VkXHJcblxyXG4gICAgZGVsX3ZlcnRleDogKG5hbWUsIGNhbGxfY2hhbmdlZCA9IHRydWUpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAaXNfdmVydGV4KG5hbWUpXHJcbiAgICAgICAgXy5wdWxsIEB2ZXJ0aWNlcywgbmFtZVxyXG4gICAgICAgIGRlbGV0ZSBAdmluZm9bbmFtZV1cclxuICAgICAgICBAZnJlZW5hbWVzLnB1c2ggcGFyc2VJbnQobmFtZSlcclxuICAgICAgICBAZGVsX2xpbmtzX3dpdGhfdmVydGV4IG5hbWUsIGZhbHNlXHJcbiAgICAgICAgQGNoYW5nZWQoKSBpZiBjYWxsX2NoYW5nZWRcclxuXHJcbiAgICAjID09PSBMSU5LUyA9PT0gXHJcbiAgICBjb3VudF9saW5rczogLT4gXHJcbiAgICAgICAgcmV0dXJuIEBsaW5rcy5sZW5ndGhcclxuXHJcbiAgICBfbWFrZV9saW5rOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIGFyciA9IFt2MSwgdjJdLnNvcnQoKVxyXG4gICAgICAgIHJldHVybiB7IGZyb206IGFyclswXSwgdG86IGFyclsxXSB9XHJcblxyXG4gICAgYWRkX2xpbms6ICh2MSwgdjIsIGNhbGxfY2hhbmdlZCA9IHRydWUpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIEBpc19saW5rKHYxLCB2MilcclxuICAgICAgICBAbGlua3MucHVzaCBAX21ha2VfbGluayh2MSwgdjIpXHJcbiAgICAgICAgQG1hcFt2MV1bdjJdID0gQG1hcFt2Ml1bdjFdID0gdHJ1ZVxyXG4gICAgICAgIEBjaGFuZ2VkKCkgaWYgY2FsbF9jaGFuZ2VkXHJcblxyXG4gICAgZGVsX2xpbms6ICh2MSwgdjIsIGNhbGxfY2hhbmdlZCA9IHRydWUpIC0+XHJcbiAgICAgICAgcCA9IChsKSAtPiAobC5mcm9tID09IHYxIGFuZCBsLnRvID09IHYyKSBvciAobC5mcm9tID09IHYyIGFuZCBsLnRvID09IHYxKVxyXG4gICAgICAgIEBkZWxfbGlua3AgcCwgY2FsbF9jaGFuZ2VkXHJcblxyXG4gICAgZGVsX2xpbmtzX3dpdGhfdmVydGV4OiAodiwgY2FsbF9jaGFuZ2VkID0gdHJ1ZSkgLT5cclxuICAgICAgICBwID0gKGwpIC0+IHYgaW4gXy52YWx1ZXMgbFxyXG4gICAgICAgIEBkZWxfbGlua3AgcCwgY2FsbF9jaGFuZ2VkXHJcblxyXG4gICAgZGVsX2xpbmtfZnJvbV9tYXA6ICh2MSwgdjIsIGNhbGxfY2hhbmdlZCA9IHRydWUpIC0+XHJcbiAgICAgICAgQG1hcFt2MV1bdjJdID0gQG1hcFt2Ml1bdjFdID0gZmFsc2VcclxuICAgICAgICBAY2hhbmdlZCgpIGlmIGNhbGxfY2hhbmdlZFxyXG5cclxuICAgIGRlbF9saW5rcDogKHByZWRpY2F0ZSwgY2FsbF9jaGFuZ2VkID0gdHJ1ZSkgLT5cclxuICAgICAgICByZXMgPSBbXVxyXG4gICAgICAgIGZvciBsIGluIEBsaW5rc1xyXG4gICAgICAgICAgICBpZiBwcmVkaWNhdGUgbFxyXG4gICAgICAgICAgICAgICAgQGRlbF9saW5rX2Zyb21fbWFwIGwuZnJvbSwgbC50bywgZmFsc2VcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmVzLnB1c2ggbFxyXG4gICAgICAgIEBsaW5rcyA9IHJlc1xyXG4gICAgICAgIEBjaGFuZ2VkKCkgaWYgY2FsbF9jaGFuZ2VkXHJcblxyXG4gICAgaXNfbGluazogKHYxLCB2MikgLT5cclxuICAgICAgICByZXR1cm4gISFAbWFwW3YxXVt2Ml1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vR3JhcGguY29mZmVlXG4gKiovIiwiXHJcbkdyYXBoID0gcmVxdWlyZSAnLi9HcmFwaCdcclxuXHJcblxyXG4jIyNcclxuZXhhbXBsZSBmb3IgYnVpbGRlcjE6XHJcbm9wdGlvbnNcclxuICAgIHZlcnRpY2VzOlxyXG4gICAgICAgIDA6IHg6IDEwMCwgeTogMTAwXHJcbiAgICAgICAgMTogeDogNTAsIHk6IDUwXHJcbiAgICAgICAgMjogeDogMTUwLCB5OiA1MFxyXG4gICAgbGlua3M6XHJcbiAgICAgICAgMDogWzEsIDJdXHJcbiMjI1xyXG5tb2R1bGUuZXhwb3J0cy5cclxuYnVpbGRlcjEgPSAob3B0aW9ucykgLT5cclxuICAgIGcgPSBuZXcgR3JhcGhcclxuICAgIGcuYWRkX3ZlcnRleCBcIlwiK25hbWUsIGluZm8gZm9yIG5hbWUsIGluZm8gb2Ygb3B0aW9ucy52ZXJ0aWNlc1xyXG4gICAgZm9yIGEsIGFyciBvZiBvcHRpb25zLmxpbmtzXHJcbiAgICAgICAgZm9yIGIgaW4gYXJyXHJcbiAgICAgICAgICAgIGcuYWRkX2xpbmsgXCJcIithLCBcIlwiK2JcclxuICAgIHJldHVybiBnXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5cclxubWFrZV9vcHRpb25zX2Zvcl9idWlsZGVyMSA9IChncmFwaCkgLT5cclxuICAgIHZlcnRpY2VzID0gXy5jbG9uZSBncmFwaC52aW5mb1xyXG4gICAgbGlua3MgPSB7fVxyXG4gICAgZm9yIHtmcm9tLCB0b30gaW4gZ3JhcGgubGlua3NcclxuICAgICAgICBsaW5rc1tmcm9tXSA9IFtdIGlmIG5vdCBsaW5rc1tmcm9tXT9cclxuICAgICAgICBsaW5rc1tmcm9tXS5wdXNoIHRvXHJcbiAgICByZXR1cm4ge3ZlcnRpY2VzLCBsaW5rc31cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaEJ1aWxkZXIuY29mZmVlXG4gKiovIiwiXHJcbkdyYXBoID0gcmVxdWlyZSAnLi9HcmFwaCdcclxudXRpbHMgPSByZXF1aXJlICcuL3V0aWxzJ1xyXG5DYW52YXNHcmFwaENvbnN0cnVjdG9yID0gcmVxdWlyZSAnLi9DYW52YXNHcmFwaENvbnN0cnVjdG9yJ1xyXG5HcmFwaEluZm8gPSByZXF1aXJlICcuL0dyYXBoSW5mbydcclxuXHJcbmNvdW50ZXIgPSAwXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9XHJcbmNsYXNzIEdyYXBoVGFibGVcclxuICAgIGNvbnN0cnVjdG9yOiAoQGNvbnRhaW5lciwgQGdyYXBoID0gbmV3IEdyYXBoKSAtPlxyXG4gICAgICAgIEBpZCA9IFwiZ3RcIiArIGNvdW50ZXIrK1xyXG4gICAgICAgIGRpdl9mb3JfY29uc3RydWN0b3IgPSAkKFwiPGRpdj5cIikuYXR0cignaWQnLCBAaWQgKyBcImdiXCIpLmdldCAwXHJcbiAgICAgICAgZGl2X2Zvcl9ncmFwaF9pbmZvID0gJChcIjxkaXY+XCIpLmF0dHIoJ2lkJywgQGlkICsgXCJpbmZvXCIpLmdldCAwXHJcblxyXG4gICAgICAgIEBlbCA9IHV0aWxzLm1ha2VfdGFsYmUgW1xyXG4gICAgICAgICAgICBbJ9Cg0LjRgdGD0L3QvtC6INCz0YDQsNGE0LAnLCAn0JjQvdGE0L7RgNC80LDRhtC40Y8g0L4g0LPRgNCw0YTQtSddLCBcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgZGl2X2Zvcl9jb25zdHJ1Y3RvciwgZGl2X2Zvcl9ncmFwaF9pbmZvXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLCB7IGhlYWRlcjogdHJ1ZSB9XHJcbiAgICAgICAgJChAY29udGFpbmVyKS5hcHBlbmQgQGVsXHJcblxyXG4gICAgICAgIEBnYiA9IG5ldyBDYW52YXNHcmFwaENvbnN0cnVjdG9yIGRpdl9mb3JfY29uc3RydWN0b3IsIEBncmFwaFxyXG4gICAgICAgIEBnaSA9IG5ldyBHcmFwaEluZm8gZGl2X2Zvcl9ncmFwaF9pbmZvLCBAZ3JhcGhcclxuXHJcbiAgICB1cGRhdGU6IC0+XHJcbiAgICAgICAgQGdiLnVwZGF0ZSgpIGlmIEBnYi51cGRhdGU/XHJcblxyXG4gICAgcmVuZGVyOiAtPlxyXG4gICAgICAgIEBnYi5yZW5kZXIoKVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaFRhYmxlLmNvZmZlZVxuICoqLyIsIlxyXG5cclxuY291bnRlciA9IDBcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9XHJcbmNsYXNzIEdyYXBoSW5mb1xyXG4gICAgY29uc3RydWN0b3I6IChAY29udGFpbmVyLCBAZ3JhcGggPSBuZXcgR3JhcGgpIC0+XHJcbiAgICAgICAgQGNvbnRhaW5lciA9ICQoQGNvbnRhaW5lcikuZ2V0IDAgaWYgXy5pc1N0cmluZyBAY29udGFpbmVyXHJcbiAgICAgICAgQGlkID0gXCJncmFwaGluZm9cIiArIGNvdW50ZXIrK1xyXG4gICAgICAgIEBlbCA9ICQoXCI8ZGl2PlwiKS5nZXQgMFxyXG4gICAgICAgICQoQGNvbnRhaW5lcikuYXBwZW5kIEBlbFxyXG4gICAgICAgIEBpbmZvID1cclxuICAgICAgICAgICAgXCJjb3VudF92ZXJ0aWNlc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0LLQtdGA0YjQuNC9OlwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzogPT4gQGdyYXBoLmNvdW50X3ZlcnRpY2VzKClcclxuICAgICAgICAgICAgXCJjb3VudF9saW5rc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0YDQtdCx0LXRgDpcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBncmFwaC5jb3VudF9saW5rcygpXHJcbiAgICAgICAgICAgIFwiaW52YXJpYW50M1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JjQvdCy0LDRgNC40LDQvdGCIDM6XCJcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBpbnZhcmlhbnQzKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZm9yIGlkLG8gb2YgQGluZm9cclxuICAgICAgICAgICAgJChAZWwpLmFwcGVuZCgkKFwiPGRpdj48dT4je28udGl0bGV9PC91PiA8c3BhbiBpZD0je0BpZCtpZH0+PC9zcGFuPjwvZGl2PlwiKSlcclxuICAgICAgICBAZ3JhcGgub25fY2hhbmdlID0+IEB1cGRhdGVfaW5mbygpXHJcbiAgICAgICAgQHVwZGF0ZV9pbmZvKClcclxuXHJcbiAgICBpbnZhcmlhbnQzOiAtPlxyXG4gICAgICAgICMgY29udmVydCByZXMgdG8gc3RyaW5nXHJcbiAgICAgICAgcmVzID0gSlNPTi5zdHJpbmdpZnkgcmVzLCBudWxsLCAyXHJcbiAgICAgICAgcmV0dXJuICQoXCI8cHJlPiN7cmVzfTwvcHJlPlwiKVxyXG5cclxuICAgIHVwZGF0ZV9pbmZvOiAtPlxyXG4gICAgICAgIGZvciBpZCwgbyBvZiBAaW5mb1xyXG4gICAgICAgICAgICBpZCA9IEBpZCArIGlkXHJcbiAgICAgICAgICAgIHJlcyA9IG8uZnVuYygpXHJcbiAgICAgICAgICAgICQoJyMnK2lkKS5odG1sIFwiXCJcclxuICAgICAgICAgICAgJCgnIycraWQpLmFwcGVuZCByZXNcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaEluZm8uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==