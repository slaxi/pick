import re, { useState as te } from "react";
var x = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ne() {
  if (F) return R;
  F = 1;
  var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function a(l, c, f) {
    var E = null;
    if (f !== void 0 && (E = "" + f), c.key !== void 0 && (E = "" + c.key), "key" in c) {
      f = {};
      for (var v in c)
        v !== "key" && (f[v] = c[v]);
    } else f = c;
    return c = f.ref, {
      $$typeof: t,
      type: l,
      key: E,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return R.Fragment = o, R.jsx = a, R.jsxs = a, R;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ae() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case z:
          return "Profiler";
        case U:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case J:
            return (e.displayName || "Context") + ".Provider";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case P:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function a(e) {
      try {
        o(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), o(e);
      }
    }
    function l(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = p.A;
      return e === null ? null : e.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, r) {
      function n() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function L() {
      var e = t(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, n, u, m, d, g, k) {
      return n = d.ref, e = {
        $$typeof: S,
        type: e,
        key: r,
        props: d,
        _owner: m
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function y(e, r, n, u, m, d, g, k) {
      var i = r.children;
      if (i !== void 0)
        if (u)
          if (K(i)) {
            for (u = 0; u < i.length; u++)
              O(i[u]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(i);
      if (A.call(r, "key")) {
        i = t(e);
        var b = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        u = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", $[i + u] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          i,
          b,
          i
        ), $[i + u] = !0);
      }
      if (i = null, n !== void 0 && (a(n), i = "" + n), E(r) && (a(r.key), i = "" + r.key), "key" in r) {
        n = {};
        for (var w in r)
          w !== "key" && (n[w] = r[w]);
      } else n = r;
      return i && v(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        i,
        d,
        m,
        c(),
        n,
        g,
        k
      );
    }
    function O(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var h = re, S = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), J = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), p = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, K = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, Y = h["react-stack-bottom-frame"].bind(
      h,
      f
    )(), I = j(l(f)), $ = {};
    _.Fragment = T, _.jsx = function(e, r, n, u, m) {
      var d = 1e4 > p.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        n,
        !1,
        u,
        m,
        d ? Error("react-stack-top-frame") : Y,
        d ? j(l(e)) : I
      );
    }, _.jsxs = function(e, r, n, u, m) {
      var d = 1e4 > p.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        n,
        !0,
        u,
        m,
        d ? Error("react-stack-top-frame") : Y,
        d ? j(l(e)) : I
      );
    };
  }()), _;
}
var V;
function oe() {
  return V || (V = 1, process.env.NODE_ENV === "production" ? x.exports = ne() : x.exports = ae()), x.exports;
}
var s = oe();
const se = ({ title: t, handleClick: o, className: a, disabled: l }) => /* @__PURE__ */ s.jsx(
  "button",
  {
    className: `font-bold py-2 px-4 rounded ${a}`,
    onClick: o,
    disabled: l,
    children: t
  }
), ue = (t) => {
  const [o, a] = te(t);
  return [
    {
      value: o,
      onChange: (l) => a(l.target.value),
      onFocus: () => a("")
    },
    () => a("")
  ];
}, ie = ({
  title: t,
  className: o,
  disabled: a,
  handleClick: l
}) => ({
  title: t,
  className: o,
  disabled: a,
  handleClick: l
}), be = ({ props: t }) => {
  const [o, a] = ue(t == null ? void 0 : t.inputValue), l = ie({
    title: "Reset",
    className: "bg-blue-500 hover:bg-blue-700 text-white",
    disabled: !o.value,
    handleClick: a
  });
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600",
      children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            placeholder: "Enter your query...",
            className: `${t == null ? void 0 : t.className} min-w-0 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6`,
            ...o,
            disabled: t == null ? void 0 : t.disabled,
            "data-testid": "input-component"
          }
        ),
        /* @__PURE__ */ s.jsx(se, { ...l })
      ]
    }
  );
}, le = ({ children: t, className: o, heading: a, fontSize: l }) => {
  const c = a;
  return /* @__PURE__ */ s.jsx(c, { className: o, style: { fontSize: l }, "data-testid": "title-component", children: t });
}, ce = ({ children: t, fontSize: o, className: a }) => /* @__PURE__ */ s.jsx(
  "p",
  {
    className: `font-sans ${a}`,
    style: { fontSize: o },
    "data-testid": "text-component",
    children: t
  }
), fe = ({ src: t, children: o, ...a }) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
  o,
  /* @__PURE__ */ s.jsx(
    "video",
    {
      src: t,
      ...a,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      "data-testid": "video-component"
    }
  )
] }), de = () => /* @__PURE__ */ s.jsx("div", { className: "overlay" }), Ee = ({ children: t }) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
  t,
  /* @__PURE__ */ s.jsxs(
    fe,
    {
      src: "https://cdn.pixabay.com/video/2025/04/10/271161_tiny.mp4",
      className: "video_fullscreen",
      children: [
        /* @__PURE__ */ s.jsx(de, {}),
        /* @__PURE__ */ s.jsxs(le, { heading: "h2", fontSize: 64, className: "video_heading font-sans", children: [
          "This is the heading",
          /* @__PURE__ */ s.jsx(ce, { className: "text-white-800 font-sans font-thin", fontSize: 18, children: /* @__PURE__ */ s.jsx("span", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, blanditiis odio!" }) })
        ] })
      ]
    }
  )
] });
export {
  se as Button,
  be as Input,
  ce as Text,
  le as Title,
  fe as Video,
  de as VideoOverlay,
  Ee as VideoWrapper,
  ie as useButton,
  ue as useInput
};
