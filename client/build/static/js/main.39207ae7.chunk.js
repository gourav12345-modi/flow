(this.webpackJsonpflow = this.webpackJsonpflow || []).push([
  [0],
  {
    37: function (e, t, a) {},
    45: function (e, t, a) {},
    68: function (e, t, a) {},
    72: function (e, t, a) {},
    73: function (e, t, a) {},
    74: function (e, t, a) {},
    75: function (e, t, a) {},
    76: function (e, t, a) {},
    78: function (e, t, a) {},
    79: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        c = a.n(n),
        s = a(20),
        r = a.n(s),
        i = (a(45), a(13)),
        o = a(6),
        u = a(3),
        l = a.n(u),
        j = a(7),
        d = a(15),
        b = a.n(d),
        O = a(38),
        p = a(18),
        m = a(39),
        f = a(2),
        x = "REGISTER_REQUEST",
        h = "REGISTER_SUCCESS",
        v = "REGISTER_FAIL",
        g = "LOGIN_REQUEST",
        k = "LOGIN_SUCCESS",
        N = "LOGIN_FAIL",
        y = "LOGOUT_REQUEST",
        E = "LOGOUT_SUCCESS",
        C = "GET_USER_INFO_REQUEST",
        S = "GET_USER_INFO_SUCCESS",
        _ = "GET_USER_INFO_FAIL",
        T = "CREATE_TASK_REQUEST",
        w = "CREATE_TASK_SUCCESS",
        I = "CREATE_TASK_FAIL",
        L = "GET_ALL_TASK_REQUEST",
        A = "GET_ALL_TASK_SUCCESS",
        U = "GET_ALL_TASK_FAIL",
        R = "UPDATE_TASK_REQUEST",
        D = "UPDATE_TASK_SUCCESS",
        F = "UPDATE_TASK_FAIL",
        G = "DELETE_TASK_REQUEST",
        M = "DELETE_TASK_SUCCESS",
        K = "DELETE_TASK_FAIL",
        P = "COMMENT_LOADING",
        Q = "COMMENT_ERROR",
        B = "CREATE_COMMENT_SUCCESS",
        z = "UPDATE_COMMENT_SUCCESS",
        V = "DELETE_COMMENT_SUCCESS",
        W = "CLEAR_LOG_DATA",
        H = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case x:
              return { loading: !0, error: !1 };
            case h:
              return { loading: !1, message: t.payload };
            case v:
              return { loading: !1, error: t.payload };
            case g:
              return { loading: !0, error: !1 };
            case k:
              return {
                loading: !1,
                user: t.payload,
                error: !1,
                message: "User LoggedIn",
              };
            case N:
              return { loading: !1, error: t.payload };
            case y:
              return Object(f.a)(Object(f.a)({}, e), {}, { loading: !0 });
            case C:
              return { userInfoLoading: !0 };
            case S:
              return { userInfoLoading: !1, user: t.payload };
            case _:
              return { userInfoLoading: !1 };
            case E:
              return {};
            case W:
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                { message: "", error: !1, loading: !1 }
              );
            default:
              return e;
          }
        },
        J = a(28),
        X = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case L:
              return { loading: !0 };
            case A:
              return { loading: !1, tasks: t.payload };
            case U:
              return { loading: !1, error: t.payload };
            case R:
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                { updateTaskLoading: !0 }
              );
            case D:
              var a = [];
              return (
                e.tasks.map(function (e) {
                  e._id === t.payload._id ? a.push(t.payload.task) : a.push(e);
                }),
                Object(f.a)(
                  Object(f.a)({}, e),
                  {},
                  { tasks: a, updateTaskLoading: !1 }
                )
              );
            case F:
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                { updateTaskLoading: !1, updateTaskError: t.payload }
              );
            case T:
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                { addTasksLoading: !0 }
              );
            case w:
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                {
                  addTasksLoading: !1,
                  tasks: [t.payload].concat(Object(J.a)(e.tasks)),
                }
              );
            case I:
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                { addTaskError: t.payload, addTasksLoading: !1 }
              );
            case G:
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                { deleteTaskLoading: !0 }
              );
            case M:
              var n = e.tasks.filter(function (e) {
                return e._id !== t.payload;
              });
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                { tasks: n, deleteTaskLoading: !1 }
              );
            case K:
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                { deleteTaskLoading: !1, deleteTaskError: t.payload }
              );
            case B:
              var c = e.tasks
                .map(function (e) {
                  return e._id;
                })
                .indexOf(t.payload.taskId);
              return (
                -1 != c &&
                  (e.tasks[c].comments = [t.payload.data].concat(
                    Object(J.a)(e.tasks[c].comments)
                  )),
                Object(f.a)({}, e)
              );
            case z:
              var s = e.tasks
                .map(function (e) {
                  return e._id;
                })
                .indexOf(t.payload.taskId);
              if (-1 !== s) {
                var r = e.tasks[s].comments
                  .map(function (e) {
                    return e._id;
                  })
                  .indexOf(t.payload.commentId);
                -1 !== r &&
                  (e.tasks[s].comments[r].description = t.payload.description);
              }
              return Object(f.a)({}, e);
            case V:
              var i = e.tasks
                .map(function (e) {
                  return e._id;
                })
                .indexOf(t.payload.taskId);
              if (-1 !== i) {
                var o = e.tasks[i].comments
                  .map(function (e) {
                    return e._id;
                  })
                  .indexOf(t.payload.commentId);
                o > -1 && e.tasks[i].comments.splice(o, 1);
              }
              return Object(f.a)({}, e);
            case E:
              return {};
            default:
              return e;
          }
        },
        q = Object(p.b)({ userInfo: H, tasks: X }),
        Y = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || p.c,
        Z = Object(p.d)(q, {}, Y(Object(p.a)(m.a))),
        $ = function (e) {
          return (function () {
            var t = Object(j.a)(
              l.a.mark(function t(a) {
                var n, c;
                return l.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), a({ type: x }), (t.next = 4), ne(e)
                          );
                        case 4:
                          (n = t.sent),
                            (c = n.data),
                            a({ type: h, payload: c.message }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            a({ type: v, payload: t.t0.response.data.message });
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ee = function (e) {
          return (function () {
            var t = Object(j.a)(
              l.a.mark(function t(a) {
                var n, c;
                return l.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), a({ type: g }), (t.next = 4), ce(e)
                          );
                        case 4:
                          (n = t.sent),
                            (c = n.data),
                            a({ type: k, payload: c }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            a({ type: N, payload: t.t0.response.data.message });
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        te = "/api",
        ae = b.a.create();
      ae.interceptors.request.use(
        (function () {
          var e = Object(j.a)(
            l.a.mark(function e(t) {
              var a, n, c, s, r;
              return l.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = Z.getState()).userInfo.user &&
                          a.userInfo.user.accessToken &&
                          (n = a.userInfo.user.accessToken),
                        (c = new Date()),
                        !(1e3 * Object(O.a)(n).exp < c.getTime()))
                      ) {
                        e.next = 13;
                        break;
                      }
                      return (e.next = 7), re();
                    case 7:
                      (s = e.sent),
                        (r = s.data),
                        Z.dispatch({ type: S, payload: r }),
                        (t.headers.authorization = "Bearer ".concat(
                          r.accessToken
                        )),
                        (e.next = 14);
                      break;
                    case 13:
                      t.headers.authorization = "Bearer ".concat(n);
                    case 14:
                      return e.abrupt("return", t);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        function (e) {
          return Promise.reject(e);
        }
      );
      var ne = function (e) {
          return b.a.post("".concat(te, "/user/register"), e);
        },
        ce = function (e) {
          return b.a.post("".concat(te, "/user/login"), e);
        },
        se = function () {
          return b.a.delete("".concat(te, "/user/logout"));
        },
        re = function () {
          return b.a.post("".concat(te, "/user/refreshToken"));
        },
        ie = function (e) {
          return ae.post("".concat(te, "/task"), e);
        },
        oe = function (e, t) {
          return ae.patch("".concat(te, "/task/").concat(e), t);
        },
        ue = function (e) {
          return ae.delete("".concat(te, "/task/").concat(e));
        },
        le = function (e) {
          return ae.post("".concat(te, "/comment"), e);
        },
        je = a(5),
        de = (a(68), a(0));
      function be() {
        var e = Object(je.c)(function (e) {
            return e.userInfo;
          }),
          t = e.user;
        e.error, e.loading;
        return Object(de.jsxs)("div", {
          className: "navigation",
          children: [
            Object(de.jsx)("div", {
              className: "companyName",
              children: Object(de.jsx)("h3", { children: "Flow" }),
            }),
            t && t.accessToken
              ? Object(de.jsx)(c.a.Fragment, {
                  children: Object(de.jsxs)("div", {
                    className: "userInfo",
                    children: [
                      Object(de.jsx)("div", {
                        className: "notification",
                        children: Object(de.jsxs)("p", {
                          children: [
                            "  ",
                            Object(de.jsx)("i", { className: "far fa-bell" }),
                            "  ",
                          ],
                        }),
                      }),
                      Object(de.jsx)("div", {
                        className: "nameAndMore",
                        children: Object(de.jsx)(i.b, {
                          to: "/dashboard",
                          className: "nameLink",
                          children: Object(de.jsx)("p", { children: t.name }),
                        }),
                      }),
                      Object(de.jsx)("div", {
                        className: "userImage",
                        children: Object(de.jsx)("img", {
                          src: "./logo192.png",
                          alt: "user",
                        }),
                      }),
                    ],
                  }),
                })
              : Object(de.jsx)(c.a.Fragment, {
                  children: Object(de.jsxs)("div", {
                    className: "userInfo",
                    children: [
                      Object(de.jsx)(i.b, {
                        to: "/login",
                        className: "login",
                        children: "Login",
                      }),
                      Object(de.jsx)(i.b, {
                        to: "/register",
                        className: "register",
                        children: "Register",
                      }),
                    ],
                  }),
                }),
          ],
        });
      }
      a(72);
      function Oe(e) {
        return Object(de.jsxs)("div", {
          class: "home",
          children: [
            Object(de.jsx)(be, {}),
            Object(de.jsxs)("div", {
              className: "intro-text",
              children: [
                Object(de.jsx)("h3", { children: "Welcome To Flow" }),
                Object(de.jsx)("p", {
                  children: "Organize your task with flow...",
                }),
              ],
            }),
          ],
        });
      }
      a(73), a(74);
      function pe(e) {
        var t = Object(o.g)(),
          a = Object(je.b)();
        return Object(de.jsxs)("div", {
          className: "sidebar",
          children: [
            Object(de.jsxs)("ul", {
              className: "primary",
              children: [
                Object(de.jsxs)("li", {
                  children: [
                    Object(de.jsx)("p", {
                      className: "icon",
                      children: Object(de.jsx)("i", {
                        className: "fas fa-signal",
                      }),
                    }),
                    Object(de.jsx)("p", {
                      className: "name",
                      children: "Stats",
                    }),
                  ],
                }),
                Object(de.jsxs)("li", {
                  children: [
                    Object(de.jsx)("p", {
                      className: "icon",
                      children: Object(de.jsx)("i", {
                        className: "far fa-calendar-alt",
                      }),
                    }),
                    Object(de.jsx)("p", {
                      className: "name",
                      children: "Calander",
                    }),
                  ],
                }),
                Object(de.jsxs)("li", {
                  children: [
                    Object(de.jsx)("p", {
                      className: "icon",
                      children: Object(de.jsx)("i", {
                        className: "far fa-comment-alt",
                      }),
                    }),
                    Object(de.jsx)("p", {
                      className: "name",
                      children: "Chat",
                    }),
                  ],
                }),
                Object(de.jsxs)("li", {
                  children: [
                    Object(de.jsx)("p", {
                      className: "icon",
                      children: Object(de.jsx)("i", {
                        className: "far fa-user",
                      }),
                    }),
                    Object(de.jsx)("p", {
                      className: "name",
                      children: "Profile",
                    }),
                  ],
                }),
              ],
            }),
            Object(de.jsxs)("ul", {
              className: "secondary",
              children: [
                Object(de.jsxs)("li", {
                  children: [
                    Object(de.jsx)("p", {
                      className: "icon",
                      children: Object(de.jsx)("i", {
                        className: "fas fa-cog",
                      }),
                    }),
                    Object(de.jsx)("p", {
                      className: "name",
                      children: "Setting",
                    }),
                  ],
                }),
                Object(de.jsxs)("li", {
                  children: [
                    Object(de.jsx)("p", {
                      className: "icon",
                      children: Object(de.jsx)("i", {
                        className: "fas fa-sign-out-alt",
                      }),
                    }),
                    Object(de.jsx)("p", {
                      className: "name",
                      onClick: function () {
                        a(
                          (function (e) {
                            return (function () {
                              var t = Object(j.a)(
                                l.a.mark(function t(a) {
                                  return l.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0), (t.next = 3), se()
                                            );
                                          case 3:
                                            a({ type: E }),
                                              e.push("/"),
                                              (t.next = 10);
                                            break;
                                          case 7:
                                            (t.prev = 7),
                                              (t.t0 = t.catch(0)),
                                              console.log(t.t0);
                                          case 10:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 7]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })(t)
                        );
                      },
                      children: "Logout",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var me = a(8);
      a(75), a(76);
      function fe(e) {
        var t = e.task,
          a = e.openComments,
          s = e.setComments,
          r = Object(je.b)(),
          i = Object(n.useState)(!1),
          o = Object(me.a)(i, 2),
          u = o[0],
          d = o[1],
          b = Object(n.useState)(t),
          O = Object(me.a)(b, 2),
          p = O[0],
          m = O[1];
        return Object(de.jsx)("div", {
          className: "taskCard",
          children: u
            ? Object(de.jsxs)("div", {
                className: "modal",
                children: [
                  Object(de.jsx)("input", {
                    type: "text",
                    value: p.title,
                    onChange: function (e) {
                      return m(
                        Object(f.a)(
                          Object(f.a)({}, p),
                          {},
                          { title: e.target.value }
                        )
                      );
                    },
                  }),
                  Object(de.jsx)("textarea", {
                    cols: "30",
                    rows: "10",
                    value: p.description,
                    onChange: function (e) {
                      return m(
                        Object(f.a)(
                          Object(f.a)({}, p),
                          {},
                          { description: e.target.value }
                        )
                      );
                    },
                  }),
                  Object(de.jsxs)("div", {
                    className: "actions",
                    children: [
                      Object(de.jsx)("button", {
                        className: "add",
                        onClick: function () {
                          r(
                            (function (e) {
                              return (function () {
                                var t = Object(j.a)(
                                  l.a.mark(function t(a) {
                                    var n, c;
                                    return l.a.wrap(
                                      function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                a({ type: R }),
                                                (t.prev = 1),
                                                (t.next = 4),
                                                oe(e._id, e)
                                              );
                                            case 4:
                                              (n = t.sent),
                                                (c = n.data),
                                                a({
                                                  type: D,
                                                  payload: {
                                                    _id: e._id,
                                                    task: c,
                                                  },
                                                }),
                                                (t.next = 12);
                                              break;
                                            case 9:
                                              (t.prev = 9),
                                                (t.t0 = t.catch(1)),
                                                a({
                                                  type: F,
                                                  payload:
                                                    t.t0.response.data.message,
                                                });
                                            case 12:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t,
                                      null,
                                      [[1, 9]]
                                    );
                                  })
                                );
                                return function (e) {
                                  return t.apply(this, arguments);
                                };
                              })();
                            })(p)
                          ),
                            d(!1);
                        },
                        children: "Update",
                      }),
                      Object(de.jsx)("button", {
                        className: "cancel",
                        onClick: function (e) {
                          return d(!1);
                        },
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              })
            : Object(de.jsxs)(c.a.Fragment, {
                children: [
                  Object(de.jsxs)("div", {
                    className: "mainContent",
                    children: [
                      Object(de.jsxs)("div", {
                        className: "heading",
                        children: [
                          Object(de.jsx)("p", {
                            className: "name",
                            children: t.title,
                          }),
                          Object(de.jsx)("p", {
                            className: "edit",
                            onClick: function (e) {
                              return d(!0);
                            },
                            children: Object(de.jsx)("i", {
                              className: "fas fa-pen",
                            }),
                          }),
                        ],
                      }),
                      Object(de.jsx)("div", {
                        className: "time",
                        children: new Date(t.updatedAt).toLocaleString(),
                      }),
                      Object(de.jsx)("div", {
                        className: "description",
                        children: Object(de.jsx)("p", {
                          children: t.description,
                        }),
                      }),
                    ],
                  }),
                  Object(de.jsxs)("div", {
                    className: "bottom",
                    children: [
                      Object(de.jsxs)("div", {
                        className: "commentsCount",
                        onClick: function () {
                          s(t), a(!0);
                        },
                        children: [t.comments.length, " Comments"],
                      }),
                      Object(de.jsx)("div", {
                        className: "delete",
                        onClick: function () {
                          var e;
                          r(
                            ((e = t._id),
                            (function () {
                              var t = Object(j.a)(
                                l.a.mark(function t(a) {
                                  return l.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              a({ type: G }),
                                              (t.prev = 1),
                                              (t.next = 4),
                                              ue(e)
                                            );
                                          case 4:
                                            a({ type: M, payload: e }),
                                              (t.next = 10);
                                            break;
                                          case 7:
                                            (t.prev = 7),
                                              (t.t0 = t.catch(1)),
                                              a({ type: K });
                                          case 10:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[1, 7]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })())
                          );
                        },
                        children: Object(de.jsx)("i", {
                          className: "fas fa-trash-alt",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
        });
      }
      var xe = function (e) {
        var t = e.message,
          a = e.taskId,
          c = Object(n.useState)(!1),
          s = Object(me.a)(c, 2),
          r = s[0],
          i = s[1],
          o = Object(n.useState)(t),
          u = Object(me.a)(o, 2),
          d = u[0],
          b = u[1],
          O = Object(je.b)();
        return r
          ? Object(de.jsxs)("div", {
              className: "modal",
              children: [
                Object(de.jsx)("textarea", {
                  cols: "30",
                  rows: "10",
                  value: d.description,
                  onChange: function (e) {
                    return b(
                      Object(f.a)(
                        Object(f.a)({}, d),
                        {},
                        { description: e.target.value }
                      )
                    );
                  },
                }),
                Object(de.jsxs)("div", {
                  className: "actions",
                  children: [
                    Object(de.jsx)("button", {
                      className: "add",
                      onClick: function () {
                        var e;
                        O(
                          ((e = {
                            description: d.description,
                            commentId: t._id,
                            taskId: a,
                            setOpenEditComment: i,
                          }),
                          (function () {
                            var t = Object(j.a)(
                              l.a.mark(function t(a) {
                                var n, c, s, r;
                                return l.a.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            a({ type: P }),
                                            (t.prev = 1),
                                            (n = e.commentId),
                                            (c = e.description),
                                            (s = e.setOpenEditComment),
                                            (r = e.taskId),
                                            (t.next = 5),
                                            (i = n),
                                            (o = { description: c }),
                                            ae.patch(
                                              ""
                                                .concat(te, "/comment/")
                                                .concat(i),
                                              o
                                            )
                                          );
                                        case 5:
                                          a({
                                            type: z,
                                            payload: {
                                              description: c,
                                              commentId: n,
                                              taskId: r,
                                            },
                                          }),
                                            s(!1),
                                            (t.next = 12);
                                          break;
                                        case 9:
                                          (t.prev = 9),
                                            (t.t0 = t.catch(1)),
                                            a({
                                              type: Q,
                                              payload:
                                                t.t0.response.data.message,
                                            });
                                        case 12:
                                        case "end":
                                          return t.stop();
                                      }
                                    var i, o;
                                  },
                                  t,
                                  null,
                                  [[1, 9]]
                                );
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })())
                        );
                      },
                      children: "Update",
                    }),
                    Object(de.jsx)("button", {
                      className: "cancel",
                      onClick: function (e) {
                        return i(!1);
                      },
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            })
          : Object(de.jsxs)("div", {
              className: "messageContainer",
              children: [
                Object(de.jsx)("div", {
                  className: "messageTime",
                  children: new Date(t.createdAt).toLocaleString(),
                }),
                Object(de.jsx)("div", {
                  className: "message",
                  children: t.description,
                }),
                Object(de.jsxs)("div", {
                  className: "action",
                  children: [
                    Object(de.jsx)("div", {
                      className: "edit",
                      onClick: function (e) {
                        i(!0);
                      },
                      children: Object(de.jsx)("i", {
                        className: "fas fa-pen",
                      }),
                    }),
                    Object(de.jsx)("div", {
                      className: "delete",
                      onClick: function () {
                        var e;
                        O(
                          ((e = { commentId: t._id, taskId: a }),
                          (function () {
                            var t = Object(j.a)(
                              l.a.mark(function t(a) {
                                var n, c;
                                return l.a.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            a({ type: P }),
                                            (t.prev = 1),
                                            (n = e.commentId),
                                            (c = e.taskId),
                                            (t.next = 5),
                                            (s = n),
                                            ae.delete(
                                              ""
                                                .concat(te, "/comment/")
                                                .concat(s)
                                            )
                                          );
                                        case 5:
                                          a({
                                            type: V,
                                            payload: {
                                              taskId: c,
                                              commentId: n,
                                            },
                                          }),
                                            (t.next = 11);
                                          break;
                                        case 8:
                                          (t.prev = 8),
                                            (t.t0 = t.catch(1)),
                                            a({
                                              type: Q,
                                              payload:
                                                t.t0.response.data.message,
                                            });
                                        case 11:
                                        case "end":
                                          return t.stop();
                                      }
                                    var s;
                                  },
                                  t,
                                  null,
                                  [[1, 8]]
                                );
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })())
                        );
                      },
                      children: Object(de.jsx)("i", {
                        className: "fas fa-trash-alt",
                      }),
                    }),
                  ],
                }),
              ],
            });
      };
      var he = function (e) {
        var t = e.type,
          a = e.tasks,
          c = Object(n.useState)(!1),
          s = Object(me.a)(c, 2),
          r = s[0],
          i = s[1],
          o = Object(n.useState)(!1),
          u = Object(me.a)(o, 2),
          d = u[0],
          b = u[1],
          O = Object(n.useState)(a[0]),
          p = Object(me.a)(O, 2),
          m = p[0],
          x = p[1],
          h = Object(n.useState)({ status: t, title: "", description: "" }),
          v = Object(me.a)(h, 2),
          g = v[0],
          k = v[1],
          N = Object(n.useState)(!1),
          y = Object(me.a)(N, 2),
          E = y[0],
          C = y[1],
          S = Object(n.useState)(""),
          _ = Object(me.a)(S, 2),
          I = _[0],
          L = _[1],
          A = Object(je.b)();
        return Object(de.jsx)("div", {
          className: "taskBoard",
          children: r
            ? Object(de.jsxs)("div", {
                className: "comments",
                children: [
                  Object(de.jsxs)("div", {
                    className: "heading",
                    onClick: function (e) {
                      i(!1);
                    },
                    children: [
                      Object(de.jsx)("i", { className: "fas fa-arrow-left" }),
                      "Comments",
                    ],
                  }),
                  Object(de.jsx)(fe, {
                    task: m,
                    openComments: i,
                    setComments: x,
                  }),
                  Object(de.jsxs)("div", {
                    className: "commentsMessage",
                    children: [
                      Object(de.jsx)("button", {
                        className: "addMore",
                        onClick: function () {
                          return C(!0);
                        },
                        children: "+",
                      }),
                      E &&
                        Object(de.jsxs)("div", {
                          className: "modal",
                          children: [
                            Object(de.jsx)("textarea", {
                              cols: "30",
                              rows: "10",
                              value: I,
                              onChange: function (e) {
                                return L(e.target.value);
                              },
                            }),
                            Object(de.jsxs)("div", {
                              className: "actions",
                              children: [
                                Object(de.jsx)("button", {
                                  className: "add",
                                  onClick: function (e) {
                                    A(
                                      (function (e) {
                                        return (function () {
                                          var t = Object(j.a)(
                                            l.a.mark(function t(a) {
                                              var n, c, s, r, i;
                                              return l.a.wrap(
                                                function (t) {
                                                  for (;;)
                                                    switch ((t.prev = t.next)) {
                                                      case 0:
                                                        return (
                                                          a({ type: P }),
                                                          (t.prev = 1),
                                                          (n = e.commentData),
                                                          (c = e.taskId),
                                                          (s =
                                                            e.setOpenNewComment),
                                                          (t.next = 5),
                                                          le({
                                                            commentData: n,
                                                            taskId: c,
                                                          })
                                                        );
                                                      case 5:
                                                        (r = t.sent),
                                                          (i = r.data),
                                                          a({
                                                            type: B,
                                                            payload: {
                                                              data: i,
                                                              taskId: c,
                                                            },
                                                          }),
                                                          s(!1),
                                                          (t.next = 14);
                                                        break;
                                                      case 11:
                                                        (t.prev = 11),
                                                          (t.t0 = t.catch(1)),
                                                          a({
                                                            type: Q,
                                                            payload:
                                                              t.t0.response.data
                                                                .message,
                                                          });
                                                      case 14:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                },
                                                t,
                                                null,
                                                [[1, 11]]
                                              );
                                            })
                                          );
                                          return function (e) {
                                            return t.apply(this, arguments);
                                          };
                                        })();
                                      })({
                                        commentData: I,
                                        taskId: m._id,
                                        setOpenNewComment: C,
                                      })
                                    );
                                  },
                                  children: "Add",
                                }),
                                Object(de.jsx)("button", {
                                  className: "cancel",
                                  onClick: function (e) {
                                    return C(!1);
                                  },
                                  children: "Cancel",
                                }),
                              ],
                            }),
                          ],
                        }),
                      m.comments.map(function (e, t) {
                        return Object(de.jsx)(
                          xe,
                          { message: e, taskId: m._id },
                          e._id
                        );
                      }),
                    ],
                  }),
                ],
              })
            : Object(de.jsxs)("div", {
                className: "todo",
                children: [
                  Object(de.jsxs)("div", {
                    className: "heading",
                    children: [
                      Object(de.jsx)("p", {
                        className: "name",
                        children:
                          0 === t ? "To Do" : 1 === t ? "In Progress" : "Done",
                      }),
                      Object(de.jsx)("p", {
                        className: "count",
                        children: a.length,
                      }),
                    ],
                  }),
                  Object(de.jsx)("button", {
                    className: "addMore",
                    onClick: function () {
                      return b(!0);
                    },
                    children: "+",
                  }),
                  Object(de.jsxs)("div", {
                    className: "content",
                    children: [
                      d &&
                        Object(de.jsxs)("div", {
                          className: "modal",
                          children: [
                            Object(de.jsx)("input", {
                              type: "text",
                              value: g.title,
                              onChange: function (e) {
                                return k(
                                  Object(f.a)(
                                    Object(f.a)({}, g),
                                    {},
                                    { title: e.target.value }
                                  )
                                );
                              },
                            }),
                            Object(de.jsx)("textarea", {
                              cols: "30",
                              rows: "10",
                              value: g.description,
                              onChange: function (e) {
                                return k(
                                  Object(f.a)(
                                    Object(f.a)({}, g),
                                    {},
                                    { description: e.target.value }
                                  )
                                );
                              },
                            }),
                            Object(de.jsxs)("div", {
                              className: "actions",
                              children: [
                                Object(de.jsx)("button", {
                                  className: "add",
                                  onClick: function (e) {
                                    var t;
                                    A(
                                      ((t = g),
                                      (function () {
                                        var e = Object(j.a)(
                                          l.a.mark(function e(a) {
                                            var n, c;
                                            return l.a.wrap(
                                              function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      return (
                                                        a({ type: T }),
                                                        (e.prev = 1),
                                                        (e.next = 4),
                                                        ie(t)
                                                      );
                                                    case 4:
                                                      (n = e.sent),
                                                        (c = n.data),
                                                        a({
                                                          type: w,
                                                          payload: c,
                                                        }),
                                                        (e.next = 12);
                                                      break;
                                                    case 9:
                                                      (e.prev = 9),
                                                        (e.t0 = e.catch(1)),
                                                        console.log(e.t0);
                                                    case 12:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              },
                                              e,
                                              null,
                                              [[1, 9]]
                                            );
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })())
                                    ),
                                      b(!1);
                                  },
                                  children: "Add",
                                }),
                                Object(de.jsx)("button", {
                                  className: "cancel",
                                  onClick: function (e) {
                                    return b(!1);
                                  },
                                  children: "Cancel",
                                }),
                              ],
                            }),
                          ],
                        }),
                      a.map(function (e) {
                        return Object(de.jsx)(
                          fe,
                          { task: e, openComments: i, setComments: x },
                          e._id
                        );
                      }),
                    ],
                  }),
                ],
              }),
        });
      };
      function ve() {
        var e = Object(je.c)(function (e) {
            return e.tasks;
          }),
          t = e.tasks,
          a =
            (e.loading,
            e.error,
            t
              ? t.filter(function (e) {
                  return 0 === e.status;
                })
              : []),
          n = t
            ? t.filter(function (e) {
                return 1 === e.status;
              })
            : [],
          c = t
            ? t.filter(function (e) {
                return 2 === e.status;
              })
            : [];
        return Object(de.jsxs)("div", {
          className: "dashboard",
          children: [
            Object(de.jsx)(be, { isAuth: !0 }),
            Object(de.jsxs)("div", {
              className: "dashboardAndSidebarContainer",
              children: [
                Object(de.jsx)(pe, {}),
                Object(de.jsxs)("div", {
                  className: "taskBoardContainer",
                  children: [
                    Object(de.jsx)(he, { tasks: a, type: 0 }),
                    Object(de.jsx)(he, { tasks: n, type: 1 }),
                    Object(de.jsx)(he, { tasks: c, type: 2 }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      a(37);
      function ge() {
        var e = Object(je.b)(),
          t = Object(je.c)(function (e) {
            return e.userInfo;
          }),
          a = t.error,
          c = t.loading,
          s = t.message;
        Object(n.useEffect)(function () {
          return function () {
            e({ type: W });
          };
        }, []);
        var r = Object(n.useState)({ email: "", password: "" }),
          u = Object(me.a)(r, 2),
          d = u[0],
          b = u[1],
          O = (function () {
            var t = Object(j.a)(
              l.a.mark(function t(a) {
                return l.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        a.preventDefault(), e(ee(d));
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return "User LoggedIn" === s
          ? Object(de.jsx)(o.a, { to: "/dashboard" })
          : Object(de.jsxs)("div", {
              children: [
                Object(de.jsx)(be, { isAuth: !1 }),
                Object(de.jsxs)("div", {
                  className: "signupFormContainer",
                  children: [
                    Object(de.jsx)("h1", { children: "Login" }),
                    Object(de.jsx)("p", {
                      className: a ? "error" : "notVisible",
                      children: a || "Welcome",
                    }),
                    Object(de.jsxs)("form", {
                      onSubmit: O,
                      children: [
                        Object(de.jsxs)("div", {
                          children: [
                            Object(de.jsx)("i", {
                              className: "far fa-envelope",
                            }),
                            " ",
                            Object(de.jsx)("input", {
                              type: "email",
                              name: "email",
                              id: "email",
                              value: d.email,
                              onChange: function (e) {
                                return b(
                                  Object(f.a)(
                                    Object(f.a)({}, d),
                                    {},
                                    { email: e.target.value }
                                  )
                                );
                              },
                            }),
                          ],
                        }),
                        Object(de.jsxs)("div", {
                          children: [
                            Object(de.jsx)("i", { className: "fas fa-lock" }),
                            " ",
                            Object(de.jsx)("input", {
                              type: "password",
                              name: "password",
                              id: "password",
                              value: d.password,
                              onChange: function (e) {
                                return b(
                                  Object(f.a)(
                                    Object(f.a)({}, d),
                                    {},
                                    { password: e.target.value }
                                  )
                                );
                              },
                            }),
                          ],
                        }),
                        Object(de.jsxs)("button", {
                          type: "submit",
                          children: [c ? "Hangon..." : "Login", " "],
                        }),
                      ],
                    }),
                    Object(de.jsxs)("h3", {
                      children: [
                        "Don't have account ? ",
                        Object(de.jsx)(i.b, {
                          to: "/register",
                          children: "Signup",
                        }),
                        " ",
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
      function ke() {
        var e = Object(je.b)(),
          t = Object(je.c)(function (e) {
            return e.userInfo;
          }),
          a = t.error,
          c = t.loading,
          s = t.message;
        Object(n.useEffect)(function () {
          return function () {
            e({ type: W });
          };
        }, []);
        var r = Object(n.useState)({ name: "", email: "", password: "" }),
          u = Object(me.a)(r, 2),
          d = u[0],
          b = u[1],
          O = (function () {
            var t = Object(j.a)(
              l.a.mark(function t(a) {
                return l.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        a.preventDefault(), e($(d));
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return "User created" === s
          ? Object(de.jsx)(o.a, { to: "/login" })
          : Object(de.jsxs)("div", {
              children: [
                Object(de.jsx)(be, { isAuth: !1 }),
                Object(de.jsxs)("div", {
                  className: "signupFormContainer",
                  children: [
                    Object(de.jsx)("h1", { children: "Signup" }),
                    Object(de.jsx)("p", {
                      className: a ? "error" : "notVisible",
                      children: a || "Welcome",
                    }),
                    Object(de.jsxs)("form", {
                      onSubmit: O,
                      children: [
                        Object(de.jsxs)("div", {
                          children: [
                            Object(de.jsx)("i", { className: "far fa-user" }),
                            " ",
                            Object(de.jsx)("input", {
                              type: "text",
                              name: "name",
                              id: "name",
                              value: d.name,
                              onChange: function (e) {
                                return b(
                                  Object(f.a)(
                                    Object(f.a)({}, d),
                                    {},
                                    { name: e.target.value }
                                  )
                                );
                              },
                            }),
                          ],
                        }),
                        Object(de.jsxs)("div", {
                          children: [
                            Object(de.jsx)("i", {
                              className: "far fa-envelope",
                            }),
                            " ",
                            Object(de.jsx)("input", {
                              type: "email",
                              name: "email",
                              id: "email",
                              value: d.email,
                              onChange: function (e) {
                                return b(
                                  Object(f.a)(
                                    Object(f.a)({}, d),
                                    {},
                                    { email: e.target.value }
                                  )
                                );
                              },
                            }),
                          ],
                        }),
                        Object(de.jsxs)("div", {
                          children: [
                            Object(de.jsx)("i", { className: "fas fa-lock" }),
                            " ",
                            Object(de.jsx)("input", {
                              type: "password",
                              name: "password",
                              id: "password",
                              value: d.password,
                              onChange: function (e) {
                                return b(
                                  Object(f.a)(
                                    Object(f.a)({}, d),
                                    {},
                                    { password: e.target.value }
                                  )
                                );
                              },
                            }),
                          ],
                        }),
                        Object(de.jsxs)("button", {
                          type: "submit",
                          disabled: !!c,
                          children: [c ? "Hangon..." : "Signup", " "],
                        }),
                      ],
                    }),
                    Object(de.jsxs)("h3", {
                      children: [
                        "Already have an account ? ",
                        Object(de.jsx)(i.b, {
                          to: "/login",
                          children: "Signup",
                        }),
                        " ",
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
      var Ne = a(40),
        ye = ["component"];
      var Ee = function (e) {
        var t = e.component,
          a = Object(Ne.a)(e, ye),
          c = Object(je.c)(function (e) {
            return e.userInfo;
          }),
          s = Object(n.useState)(!1),
          r = Object(me.a)(s, 2),
          i = r[0],
          u = r[1];
        return (
          Object(n.useEffect)(
            function () {
              c.userInfoLoading || c.loading || u(!0);
            },
            [c]
          ),
          Object(de.jsx)(
            o.b,
            Object(f.a)(
              Object(f.a)({}, a),
              {},
              {
                render: function (e) {
                  return i
                    ? c.user && c.user.accessToken
                      ? Object(de.jsx)(t, Object(f.a)({}, e))
                      : Object(de.jsx)(o.a, { to: "/login" })
                    : "Loading.";
                },
              }
            )
          )
        );
      };
      var Ce = function () {
        var e = Object(je.b)(),
          t = Object(je.c)(function (e) {
            return e.userInfo;
          });
        return (
          Object(n.useEffect)(
            function () {
              e(
                (function () {
                  var e = Object(j.a)(
                    l.a.mark(function e(t) {
                      var a, n;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: C }),
                                  (e.next = 4),
                                  re()
                                );
                              case 4:
                                (a = e.sent),
                                  (n = a.data),
                                  t({ type: S, payload: n }),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  t({ type: _ });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            [e]
          ),
          Object(n.useEffect)(
            function () {
              t.user &&
                t.user.accessToken &&
                e(
                  (function () {
                    var e = Object(j.a)(
                      l.a.mark(function e(t) {
                        var a, n;
                        return l.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    t({ type: L }),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    ae.get("".concat(te, "/task"))
                                  );
                                case 4:
                                  (a = e.sent),
                                    (n = a.data),
                                    t({ type: A, payload: n }),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(1)),
                                    console.log(e.t0);
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[1, 9]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
            },
            [t]
          ),
          Object(de.jsx)(c.a.Fragment, {
            children: t.userInfoLoading
              ? "loading.."
              : Object(de.jsx)(i.a, {
                  children: Object(de.jsxs)(o.d, {
                    children: [
                      Object(de.jsxs)(o.b, {
                        exact: !0,
                        path: "/",
                        children: [" ", Object(de.jsx)(Oe, {})],
                      }),
                      Object(de.jsx)(Ee, { path: "/dashboard", component: ve }),
                      Object(de.jsxs)(o.b, {
                        path: "/register",
                        children: [" ", Object(de.jsx)(ke, {})],
                      }),
                      Object(de.jsxs)(o.b, {
                        path: "/login",
                        children: [" ", Object(de.jsx)(ge, {}), " "],
                      }),
                    ],
                  }),
                }),
          })
        );
      };
      a(77), a(78);
      r.a.render(
        Object(de.jsx)(je.a, { store: Z, children: Object(de.jsx)(Ce, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[79, 1, 2]],
]);
//# sourceMappingURL=main.39207ae7.chunk.js.map
