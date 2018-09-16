(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    0(e, t) {},
    '0785de3f40b134973d35': function(e, t, n) {
      let r = n('ab039aecd4a1d4fedc0e').addLocaleData,
        o = n('58d82b287428be065a42'),
        a = n('7dd68a64079d1d4cd439');
      r(o);
      let i = function e(t, n) {
          const r = t !== 'en' ? e('en', a) : {};
          return Object.keys(n).reduce((e, o) => {
            const a = n[o] || t === 'en' ? n[o] : r[o];
            return Object.assign(
              e,
              (function(e, t, n) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n),
                  e
                );
              })({}, o, a),
            );
          }, {});
        },
        c = { en: i('en', a) };
      (t.appLocales = ['en']),
      (t.formatTranslationMessages = i),
      (t.translationMessages = c),
      (t.DEFAULT_LOCALE = 'en');
    },
    1(e, t, n) {
      e.exports = n('8b703812aa8ae3c41814');
    },
    '4ce54d943eb1f3decabb': function(e, t, n) {
      e.exports = `${n.p}.htaccess.bin`;
    },
    '7dd68a64079d1d4cd439': function(e) {
      e.exports = [];
    },
    '8b703812aa8ae3c41814': function(e, t, n) {
      n.r(t);
      n('a26e52c4218006ed1d2f');
      let r = n('8af190b70a6bc55c6f1b'),
        o = n.n(r),
        a = n('63f14ac74ce296f77f4d'),
        i = n.n(a),
        c = n('d7dd51e1bf6bfc2c9c3d'),
        s = n('a7e3807798c0b990af09'),
        u = n('89fa59dfd48f288c4600'),
        l = n.n(u),
        f = (n('6735bdf1a3a541ab43fd'), n('e95a63b25fb92ed15721')),
        p = n('ab4cb61bcb2dc161defb'),
        d = n('a28fc3c963a1d4d1a2e5'),
        b = n('8a2d1b95e05b6a321e74'),
        h = n.n(b),
        g = function(e) {
          return e.get('global');
        },
        y = function() {
          return Object(d.a)(g, e => e.get('login'));
        },
        m = function() {
          return Object(d.a)(g, e => e.get('userObject').toJS());
        },
        v = 'App/LOGIN',
        w = 'App/USER_OBJECT',
        j = 'App/GET_USER_BY_ID',
        x = 'App/UPDATE_USER',
        O = 'App/GET_USERS',
        _ = 'App/SET_USERS',
        k = 'App/ADD_COMMENT',
        S = 'App/SET_LOGIN_DATA',
        C = 'App/REMOVE_LOGIN_DATA';
      function R(e) {
        return { type: v, status: e };
      }
      function P(e) {
        return { type: w, data: e };
      }
      function E(e) {
        return { type: S, data: e };
      }
      function N(e) {
        return { type: C, data: e };
      }
      function I(e) {
        return { type: _, data: e };
      }
      function T() {
        return { type: O };
      }
      function A(e) {
        return { type: k, data: e };
      }
      function U(e) {
        return { type: x, data: e };
      }
      let L = n('8b5525c1e73567369de0'),
        M = n.n(L),
        B = n('999b8422c18ed8d20c8d'),
        $ = n('deb1edf8e03fc2092ec7'),
        z = '#252525',
        D = '#353535',
        H = '#454545',
        J = '#555555',
        F = '#dedede',
        G = '#f9c53f',
        W = '#ff585c',
        q = '#76b985',
        K = '#85ce95',
        Q = '1px #353535 solid',
        V = '1px #dedede solid',
        X = $.a.h1.withConfig({ displayName: 'theme__Title' })(
          [
            'padding:0px;margin:10px 0px 10px 0px;color:',
            ';text-align:center;font-size:25px;',
          ],
          J,
        ),
        Y = $.a.div.withConfig({ displayName: 'styles__Login' })(
          [
            'align-items:center;justify-content:center;flex:1;background:',
            ';.googleLogin{width:100%;padding:10px;color:white;border-radius:5px;cursor:pointer;transition:all 0.5s ease;outline:none;color:white;background:',
            ';&:hover{border-radius:2px;}}',
          ],
          z,
          q,
        ),
        Z = $.a.div.withConfig({ displayName: 'styles__Form' })([
          'position:relative;width:300px;height:300px;background:white;flex-direction:column;border-radius:10px;align-items:center;justify-content:space-between;padding:10px;',
        ]),
        ee = $.a.h1.withConfig({ displayName: 'styles__Title' })(
          [
            'padding:0px;margin:10px 0px 10px 0px;color:',
            ';text-align:center;font-size:25px;',
          ],
          J,
        ),
        te = $.a.span.withConfig({ displayName: 'styles__Motto' })(
          [
            'color:',
            ';border-bottom:1px ',
            ' solid;padding-bottom:10px;text-align:center;margin-bottom:10px;',
          ],
          F,
          F,
        ),
        ne = ($.a.div.withConfig({ displayName: 'styles__Seperator' })(
          ['flex:', ';padding:0px 10px 0px 10px;'],
          e => e.flex,
        ),
        $.a.div.withConfig({ displayName: 'styles__Wrapper' })([
          'position:relative;width:100%;',
        ])),
        re = $.a.div.withConfig({ displayName: 'styles__ProfilePicture' })(
          [
            'width:96px;height:96px;transition:all 0.5s ease;align-items:center;justify-content:center;background:url(',
            ');background-size:contain;border-radius:100%;',
          ],
          e => e.source,
        ),
        oe = (function() {
          const e =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          return function(t, n, r, o) {
            let a = t && t.defaultProps,
              i = arguments.length - 3;
            if ((n || i === 0 || (n = {}), n && a))
              for (const c in a) void 0 === n[c] && (n[c] = a[c]);
            else n || (n = a || {});
            if (i === 1) n.children = o;
            else if (i > 1) {
              for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
              n.children = s;
            }
            return {
              $$typeof: e,
              type: t,
              key: void 0 === r ? null : `${r}`,
              ref: null,
              props: n,
              _owner: null,
            };
          };
        })(),
        ae = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function ie(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t;
      }
      let ce = (function(e) {
          function t() {
            let e, n, r;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = ie(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a),
                ),
              )),
              (r.responseGoogle = function(e) {
                if (e.error) {
                  if (e.error === 'popup_closed_by_user') return;
                  throw new Error(e.error);
                }
                const t =
                  localStorage.getItem('user-session') ||
                  Math.floor(Math.random() * Math.pow(10, 20));
                localStorage.setItem('user-session', t);
                const n = e.profileObj;
                (n.sessionId = t),
                r.props.setUserObject(n),
                r.props.history.push('/');
              }),
              ie(r, n)
            );
          }
          return (
            (function(e, t) {
              if (typeof t !== 'function' && t !== null)
                throw new TypeError(
                  `Super expression must either be null or a function, not ${typeof t}`,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, o.a.PureComponent),
            ae(t, [
              {
                key: 'render',
                value() {
                  const e = this;
                  return oe(
                    o.a.Fragment,
                    {},
                    void 0,
                    oe(
                      Y,
                      {},
                      void 0,
                      oe(
                        Z,
                        {},
                        void 0,
                        oe(re, {
                          source:
                            this.props.userObject.imageUrl ||
                            'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png',
                        }),
                        oe(
                          ee,
                          {},
                          void 0,
                          this.props.userObject.name || 'Fagotex',
                        ),
                        oe(
                          te,
                          {},
                          void 0,
                          'To keep your secret is wisdom; but to expect others to keep it is folly.',
                        ),
                        oe(
                          ne,
                          {},
                          void 0,
                          oe(M.a, {
                            clientId:
                              '903355575028-58hse89u1r0s9d0fr9aoelht2jrcq1cj.apps.googleusercontent.com',
                            buttonText: 'Enter',
                            className: 'googleLogin',
                            onSuccess(t) {
                              return e.responseGoogle(t);
                            },
                            onFailure(t) {
                              return e.responseGoogle(t);
                            },
                          }),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(),
        se = Object(d.b)({ userObject: m() });
      let ue = Object(c.connect)(se, e =>
          Object(p.bindActionCreators)({ setUserObject: P }, e),
        )(Object(B.withRouter)(ce)),
        le = (function() {
          const e =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          return function(t, n, r, o) {
            let a = t && t.defaultProps,
              i = arguments.length - 3;
            if ((n || i === 0 || (n = {}), n && a))
              for (const c in a) void 0 === n[c] && (n[c] = a[c]);
            else n || (n = a || {});
            if (i === 1) n.children = o;
            else if (i > 1) {
              for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
              n.children = s;
            }
            return {
              $$typeof: e,
              type: t,
              key: void 0 === r ? null : `${r}`,
              ref: null,
              props: n,
              _owner: null,
            };
          };
        })(),
        fe = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      const pe = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || (typeof t !== 'object' && typeof t !== 'function')
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments),
            )
          );
        }
        return (
          (function(e, t) {
            if (typeof t !== 'function' && t !== null)
              throw new TypeError(
                `Super expression must either be null or a function, not ${typeof t}`,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, o.a.PureComponent),
          fe(t, [
            {
              key: 'componentWillMount',
              value() {
                const e = localStorage.getItem('user-session');
                this.props.changeLoginStatus(e);
              },
            },
            {
              key: 'render',
              value() {
                return this.props.login
                  ? le(f.Redirect, { to: '/' })
                  : le(ue, {});
              },
            },
          ]),
          t
        );
      })();
      let de = Object(d.b)({ login: y() }),
        be = Object(c.connect)(de, e =>
          Object(p.bindActionCreators)({ changeLoginStatus: R }, e),
        ),
        he = Object(p.compose)(be)(pe),
        ge = n('49112c95d93be1863904'),
        ye = n.n(ge)()({
          loader() {
            return n.e(1).then(n.bind(null, '8937ca26cad1b574ef33'));
          },
          loading() {
            return null;
          },
        }),
        me = n('5ef9de3df8d92ea0e41c'),
        ve = n.n(me),
        we = n('6a4f9c383785f9168266'),
        je = n.n(we),
        xe = n('a1cf5d6fa4ed65a6ddd5'),
        Oe = n.n(xe),
        _e = n('f3b0ff1628e56352bcbf'),
        ke = n.n(_e),
        Se = n('5fa3f8487e09c6182715'),
        Ce = n.n(Se),
        Re = n('f2873ecf7390fe7d7c89'),
        Pe = n.n(Re),
        Ee = n('d3a850c4000d77bccc89'),
        Ne = n.n(Ee);
      function Ie(e) {
        const t = {
          dispatch: ke.a,
          subscribe: ke.a,
          getState: ke.a,
          replaceReducer: ke.a,
          runSaga: ke.a,
          injectedReducers: Ne.a,
          injectedSagas: Ne.a,
        };
        je()(
          Pe()(e, t),
          '(app/utils...) injectors: Expected a valid redux store',
        );
      }
      let Te = n('4e2e9348dad8fe460c1d'),
        Ae = n('54f683fcda7806277002'),
        Ue = 'app/LanguageToggle/CHANGE_LOCALE',
        Le = n('0785de3f40b134973d35'),
        Me = Object(Ae.fromJS)({ locale: Le.DEFAULT_LOCALE });
      let Be = function() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Me,
            t = arguments[1];
          switch (t.type) {
            case Ue:
              return e.set('locale', t.locale);
            default:
              return e;
          }
        },
        $e = Object(Ae.fromJS)({
          name: '',
          googleId: '',
          email: '',
          imageUrl: '',
          rating: 1,
          rank: 0,
          popularity: 0,
          comments: { recieved: {}, sent: {} },
          sessionId: localStorage.getItem('user-session') || '',
        }),
        ze = Object(Ae.fromJS)({
          login: localStorage.getItem('user-session') !== null,
          userObject: $e,
          userCards: {},
        });
      let De = function() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ze,
            t = arguments[1];
          switch (t.type) {
            case v:
              return e.set('login', t.status);
            case w:
            case S:
              return e.mergeDeep({
                userObject: t.data,
                login: localStorage.getItem('user-session') !== null,
              });
            case _:
              var n = {};
              return (
                Object.values(t.data).forEach(e => {
                  n[e.googleId] = $e.mergeDeep(e);
                }),
                e.mergeDeep({
                  userCards: n,
                  userObject: n[e.getIn(['userObject', 'googleId'])] || {},
                })
              );
            case x:
              return e.mergeDeep({
                userCards: t.data,
                userObject: t.data[e.getIn(['userObject', 'googleId'])] || {},
              });
            case C:
              return e.set('userObject', $e);
            default:
              return e;
          }
        },
        He =
          Object.assign ||
          function(e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Je = Object(Ae.fromJS)({ location: null });
      function Fe() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je,
          t = arguments[1];
        switch (t.type) {
          case s.LOCATION_CHANGE:
            return e.merge({ location: t.payload });
          default:
            return e;
        }
      }
      function Ge(e) {
        return Object(Te.combineReducers)(
          He({ route: Fe, language: Be, global: De }, e),
        );
      }
      function We(e) {
        return (
          Ie(e),
          {
            injectReducer: (function(e, t) {
              return function(n, r) {
                t || Ie(e),
                je()(
                  Ce()(n) && !Oe()(n) && ke()(r),
                  '(app/utils...) injectReducer: Expected `reducer` to be a reducer function',
                ),
                (Reflect.has(e.injectedReducers, n) &&
                    e.injectedReducers[n] === r) ||
                    ((e.injectedReducers[n] = r),
                    e.replaceReducer(Ge(e.injectedReducers)));
              };
            })(e, !0),
          }
        );
      }
      const qe = (function() {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      function Ke(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t;
      }
      let Qe = '@@saga-injector/restart-on-remount',
        Ve = '@@saga-injector/daemon',
        Xe = '@@saga-injector/once-till-unmount',
        Ye =
          Object.assign ||
          function(e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Ze = [Qe, Ve, Xe],
        et = function(e) {
          return je()(
            Ce()(e) && !Oe()(e),
            '(app/utils...) injectSaga: Expected `key` to be a non empty string',
          );
        },
        tt = function(e) {
          const t = {
            saga: ke.a,
            mode(e) {
              return Ce()(e) && Ze.includes(e);
            },
          };
          je()(
            Pe()(e, t),
            '(app/utils...) injectSaga: Expected a valid saga descriptor',
          );
        };
      function nt(e) {
        return (
          Ie(e),
          {
            injectSaga: (function(e, t) {
              return function(n) {
                let r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = arguments[2];
                t || Ie(e);
                let a = Ye({}, r, { mode: r.mode || Qe }),
                  i = a.saga,
                  c = a.mode;
                et(n), tt(a);
                const s = Reflect.has(e.injectedSagas, n);
                (!s || (s && c !== Ve && c !== Xe)) &&
                  (e.injectedSagas[n] = Ye({}, a, { task: e.runSaga(i, o) }));
              };
            })(e, !0),
            ejectSaga: (function(e, t) {
              return function(n) {
                if ((t || Ie(e), et(n), Reflect.has(e.injectedSagas, n))) {
                  const r = e.injectedSagas[n];
                  r.mode !== Ve &&
                    (r.task.cancel(), (e.injectedSagas[n] = 'done'));
                }
              };
            })(e, !0),
          }
        );
      }
      const rt = (function() {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      function ot(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t;
      }
      n('a237392145f68026c892');
      const at = Object(Ae.fromJS)({});
      let it = function() {
          const e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at;
          return arguments[1].type, e;
        },
        ct = n('6c68d13fe9e3e77d8fc4'),
        st = regeneratorRuntime.mark(lt),
        ut = regeneratorRuntime.mark(ft);
      function lt() {
        return regeneratorRuntime.wrap(
          e => {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                case 'end':
                  return e.stop();
              }
          },
          st,
          this,
        );
      }
      function ft() {
        return regeneratorRuntime.wrap(
          e => {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Object(ct.a)(lt);
                case 2:
                case 'end':
                  return e.stop();
              }
          },
          ut,
          this,
        );
      }
      let pt = $.a.div.withConfig({ displayName: 'styles__Bar' })(
          [
            'display:flex;align-items:center;justify-content:space-between;flex-direction:column;width:80px;height:100%;background:',
            ';div{display:flex;align-items:center;flex-direction:column;}a{color:white;width:100%;background:',
            ';text-decoration:none;text-align:center;align-self:flex-start;&.logout{background:',
            ';}}',
          ],
          D,
          q,
          W,
        ),
        dt = $.a.div.withConfig({ displayName: 'styles__Profile' })(
          [
            'display:flex;align-items:center;justify-content:space-between;flex-direction:column;width:80px;height:80px;background:',
            ';',
          ],
          D,
        ),
        bt = $.a.div.withConfig({ displayName: 'styles__ProfilePicture' })(
          [
            'width:60px;height:60px;border-radius:100%;background:url(',
            '),',
            ';background-size:contain;transition:all 0.5s ease;',
          ],
          e => e.source,
          D,
        ),
        ht = $.a.div.withConfig({ displayName: 'styles__PictureContainer' })(
          [
            'justify-content:center;width:100%;height:80px;min-height:80px;background:',
            ';overflow:hidden;cursor:pointer;&:hover{',
            '{transform:scale(1.7);border-radius:0%;}}',
          ],
          z,
          bt,
        ),
        gt = $.a.div.withConfig({ displayName: 'styles__Rating' })(
          [
            "justify-content:space-evenly;align-items:flex-start;&:before{content:'⭐';display:flex;width:100%;align-items:center;justify-content:center;}div{align-items:center;justify-content:center;color:",
            ';font-size:20px;}',
          ],
          F,
        ),
        yt = $.a.div.withConfig({ displayName: 'styles__Rank' })(
          [
            "justify-content:space-evenly;align-items:flex-start;&:before{content:'#';display:flex;width:100%;align-items:center;justify-content:center;font-size:25px;color:",
            ';}div{align-items:center;justify-content:center;color:',
            ';font-size:20px;}',
          ],
          G,
          F,
        ),
        mt = $.a.div.withConfig({ displayName: 'styles__Popularity' })(
          [
            "justify-content:space-evenly;align-items:flex-start;&:before{content:'💬';display:flex;width:100%;align-items:center;justify-content:center;}div{align-items:center;justify-content:center;color:",
            ';font-size:20px;}',
          ],
          F,
        ),
        vt = $.a.div.withConfig({ displayName: 'styles__Stats' })(
          [
            'width:100%;justify-content:flex-start;> div{width:100%;height:80px;border-bottom:',
            ';padding-top:5px;padding-bottom:5px;background:',
            ';&:first-child{border-top:',
            ';}}',
          ],
          Q,
          z,
          Q,
        ),
        wt = (function() {
          const e =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          return function(t, n, r, o) {
            let a = t && t.defaultProps,
              i = arguments.length - 3;
            if ((n || i === 0 || (n = {}), n && a))
              for (const c in a) void 0 === n[c] && (n[c] = a[c]);
            else n || (n = a || {});
            if (i === 1) n.children = o;
            else if (i > 1) {
              for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
              n.children = s;
            }
            return {
              $$typeof: e,
              type: t,
              key: void 0 === r ? null : `${r}`,
              ref: null,
              props: n,
              _owner: null,
            };
          };
        })(),
        jt = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function xt(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t;
      }
      let Ot = (function(e) {
          function t() {
            let e, n, r;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = xt(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a),
                ),
              )),
              (r.removeSessionId = function() {
                r.props.logoutUser(localStorage.getItem('user-session')),
                localStorage.removeItem('user-session');
              }),
              xt(r, n)
            );
          }
          return (
            (function(e, t) {
              if (typeof t !== 'function' && t !== null)
                throw new TypeError(
                  `Super expression must either be null or a function, not ${typeof t}`,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, o.a.PureComponent),
            jt(t, [
              {
                key: 'render',
                value() {
                  return wt(
                    pt,
                    {},
                    void 0,
                    wt(
                      dt,
                      {},
                      void 0,
                      wt(
                        ht,
                        {},
                        void 0,
                        wt(bt, { source: this.props.userObject.imageUrl }),
                      ),
                      this.props.login
                        ? wt(
                            f.Link,
                            {
                              onClick: this.removeSessionId,
                              className: 'logout',
                              href: !0,
                              to: '/login',
                            },
                            void 0,
                            'Logout',
                          )
                        : wt(
                            f.Link,
                            { href: !0, to: '/login' },
                            void 0,
                            'Login',
                          ),
                    ),
                    wt(
                      vt,
                      {},
                      void 0,
                      wt(
                        gt,
                        {},
                        void 0,
                        wt(
                          'div',
                          {},
                          void 0,
                          this.props.userObject.rating || '-',
                        ),
                      ),
                      wt(
                        yt,
                        {},
                        void 0,
                        wt(
                          'div',
                          {},
                          void 0,
                          this.props.userObject.rank || '-',
                        ),
                      ),
                      wt(
                        mt,
                        {},
                        void 0,
                        wt(
                          'div',
                          {},
                          void 0,
                          Object.keys(this.props.userObject.comments.recieved)
                            .length || '-',
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(),
        _t = Object(d.b)({});
      let kt = Object(c.connect)(_t, e =>
          Object(p.bindActionCreators)({ logoutUser: N }, e),
        )(Ot),
        St = $.a.div.withConfig({ displayName: 'styles__Card' })([
          'flex-direction:column;width:250px;height:fit-content;align-items:center;justify-content:space-between;background:white;padding:10px;border-radius:10px;margin:10px;',
        ]),
        Ct = $.a.div.withConfig({ displayName: 'styles__Block' })(
          [
            'flex:',
            ';width:100%;align-items:center;justify-content:center;&.column{flex-direction:column;}&.row{flex-direction:row;}',
          ],
          e => e.flex || 1,
        ),
        Rt = $.a.img.withConfig({ displayName: 'styles__Picture' })([
          'width:60px;height:60px;border-radius:100%;',
        ]),
        Pt = X,
        Et = $.a.div.withConfig({ displayName: 'styles__Stat' })(
          [
            "flex:1;align-items:center;justify-content:center;&[type='rating']{&:before{content:'⭐';display:flex;height:100%;align-items:center;justify-content:center;}div{align-items:center;justify-content:center;color:",
            ";font-size:20px;}}&[type='rank']{&:before{content:'#';display:flex;height:100%;align-items:center;justify-content:center;}div{align-items:center;justify-content:center;color:",
            ";font-size:20px;}}&[type='popularity']{&:before{content:'💬';display:flex;height:100%;align-items:center;justify-content:center;}div{align-items:center;justify-content:center;color:",
            ';font-size:20px;}}',
          ],
          F,
          F,
          F,
        ),
        Nt = $.a.div.withConfig({ displayName: 'styles__Comments' })(
          [
            'flex:1;height:180px;overflow-y:auto;flex-direction:column;width:100%;margin-top 5px;border-top:',
            ';',
          ],
          V,
        ),
        It = $.a.div.withConfig({ displayName: 'styles__Comment' })(
          [
            'display:block;width:100%;border-bottom:',
            ';height:fit-content;padding:5px 0px 5px 0px;&:last-child{border-bottom:none;}',
          ],
          V,
        ),
        Tt = $.a.input.withConfig({ displayName: 'styles__CommentInput' })(
          [
            'width:70%;height:100%;outline:none;color:',
            ';padding:5px;margin-right:5px;border-bottom:',
            ';transition:all 0.5s ease;&:focus{border-color:',
            ';}',
          ],
          z,
          V,
          q,
        ),
        At = $.a.button.withConfig({ displayName: 'styles__SendComment' })(
          [
            'width:30%;height:100%;outline:none;padding:0px;color:white;cursor:pointer;position:relative;pointer-events:',
            ';&:after{content:"',
            '";display:flex;flex:1;align-items:center;border-radius:2px;justify-content:center;padding:5px;transition:all 0.5s ease;background:',
            ';}&:hover{&:after{content:"Send";transition:all 0.5s ease;background:',
            ';border-radius:5px;}}',
          ],
          e => (e.length > 140 || 0 === e.length ? 'none' : 'unset'),
          e => (e.length > 0 ? e.length + '/140' : 'Send'),
          e => (e.length > 140 || 0 === e.length ? F : q),
          K,
        ),
        Ut = (function() {
          const e =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          return function(t, n, r, o) {
            let a = t && t.defaultProps,
              i = arguments.length - 3;
            if ((n || i === 0 || (n = {}), n && a))
              for (const c in a) void 0 === n[c] && (n[c] = a[c]);
            else n || (n = a || {});
            if (i === 1) n.children = o;
            else if (i > 1) {
              for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
              n.children = s;
            }
            return {
              $$typeof: e,
              type: t,
              key: void 0 === r ? null : `${r}`,
              ref: null,
              props: n,
              _owner: null,
            };
          };
        })(),
        Lt = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function Mt(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t;
      }
      let Bt = (function(e) {
          function t() {
            let e, n, r;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = Mt(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a),
                ),
              )),
              (r.state = { comment: '' }),
              (r.updateComment = function(e) {
                r.setState({ comment: e.target.value });
              }),
              (r.sendComment = function() {
                r.setState({ comment: '' }),
                r.props.addComment({
                  text: r.state.comment,
                  userId: r.props.userId,
                });
              }),
              (r.handleKeyPress = function(e) {
                e.charCode === 13 &&
                  r.state.comment.length !== 0 &&
                  r.state.comment.length < 140 &&
                  r.sendComment();
              }),
              Mt(r, n)
            );
          }
          return (
            (function(e, t) {
              if (typeof t !== 'function' && t !== null)
                throw new TypeError(
                  `Super expression must either be null or a function, not ${typeof t}`,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, o.a.PureComponent),
            Lt(t, [
              {
                key: 'render',
                value() {
                  const e = this;
                  return Ut(
                    o.a.Fragment,
                    {},
                    void 0,
                    Ut(Tt, {
                      value: this.state.comment,
                      onChange(t) {
                        return e.updateComment(t);
                      },
                      placeholder: 'Enter your comment',
                      onKeyPress(t) {
                        return e.handleKeyPress(t);
                      },
                    }),
                    Ut(At, {
                      length: this.state.comment.length,
                      onClick: this.sendComment,
                    }),
                  );
                },
              },
            ]),
            t
          );
        })(),
        $t = Object(d.b)({});
      let zt = Object(c.connect)($t, e =>
          Object(p.bindActionCreators)({ addComment: A }, e),
        )(Bt),
        Dt = (function() {
          const e =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          return function(t, n, r, o) {
            let a = t && t.defaultProps,
              i = arguments.length - 3;
            if ((n || i === 0 || (n = {}), n && a))
              for (const c in a) void 0 === n[c] && (n[c] = a[c]);
            else n || (n = a || {});
            if (i === 1) n.children = o;
            else if (i > 1) {
              for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
              n.children = s;
            }
            return {
              $$typeof: e,
              type: t,
              key: void 0 === r ? null : `${r}`,
              ref: null,
              props: n,
              _owner: null,
            };
          };
        })(),
        Ht = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function Jt(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t;
      }
      let Ft = (function(e) {
          function t() {
            let e, n, r;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = Jt(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a),
                ),
              )),
              (r.calculatePopularity = function() {
                return (
                  Object.keys(r.props.user.comments.recieved).length *
                  r.props.user.rating
                );
              }),
              Jt(r, n)
            );
          }
          return (
            (function(e, t) {
              if (typeof t !== 'function' && t !== null)
                throw new TypeError(
                  `Super expression must either be null or a function, not ${typeof t}`,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, o.a.PureComponent),
            Ht(t, [
              {
                key: 'componentDidMount',
                value() {
                  this.commentBox.scrollTop = this.commentBox.scrollHeight;
                },
              },
              {
                key: 'componentDidUpdate',
                value() {
                  this.commentBox.scrollTop = this.commentBox.scrollHeight;
                },
              },
              {
                key: 'render',
                value() {
                  const e = this;
                  return Dt(
                    St,
                    {},
                    void 0,
                    Dt(
                      Ct,
                      { flex: '3', className: 'column' },
                      void 0,
                      Dt(
                        Ct,
                        { flex: '3' },
                        void 0,
                        Dt(Rt, {
                          src:
                            this.props.user.imageUrl ||
                            'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png',
                        }),
                      ),
                      Dt(
                        Ct,
                        { flex: '2' },
                        void 0,
                        Dt(Pt, {}, void 0, this.props.user.name || 'John Doe'),
                      ),
                      Dt(
                        Ct,
                        { flex: '1', className: 'row stats' },
                        void 0,
                        Dt(
                          Et,
                          { type: 'rating' },
                          void 0,
                          this.props.user.rating || '-',
                        ),
                        Dt(
                          Et,
                          { type: 'rank' },
                          void 0,
                          this.props.user.rank || '-',
                        ),
                        Dt(
                          Et,
                          { type: 'popularity' },
                          void 0,
                          Object.keys(this.props.user.comments.recieved)
                            .length * this.props.user.rating || '-',
                        ),
                      ),
                    ),
                    Dt(
                      Ct,
                      { flex: '3', className: 'column' },
                      void 0,
                      Dt(
                        Nt,
                        {
                          innerRef(t) {
                            e.commentBox = t;
                          },
                        },
                        void 0,
                        Object.values(this.props.user.comments.recieved).map(
                          (e, t) => Dt(It, {}, t, e.text),
                        ),
                      ),
                    ),
                    Dt(
                      Ct,
                      { flex: '1', className: 'row' },
                      void 0,
                      Dt(
                        Ct,
                        { flex: '3', className: 'row' },
                        void 0,
                        Dt(zt, { userId: this.props.user.googleId }),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(),
        Gt = Object(d.b)({});
      let Wt = Object(c.connect)(Gt, e => Object(p.bindActionCreators)({}, e))(
          Ft,
        ),
        qt = $.a.div.withConfig({ displayName: 'styles__People' })(
          [
            'background:',
            ';flex-wrap:wrap;overflow-y:auto;width:fit-content;height:fit-content;max-height:100%;justify-content:space-around;align-items:flex-start;',
          ],
          H,
        ),
        Kt = (function() {
          const e =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          return function(t, n, r, o) {
            let a = t && t.defaultProps,
              i = arguments.length - 3;
            if ((n || i === 0 || (n = {}), n && a))
              for (const c in a) void 0 === n[c] && (n[c] = a[c]);
            else n || (n = a || {});
            if (i === 1) n.children = o;
            else if (i > 1) {
              for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
              n.children = s;
            }
            return {
              $$typeof: e,
              type: t,
              key: void 0 === r ? null : `${r}`,
              ref: null,
              props: n,
              _owner: null,
            };
          };
        })(),
        Qt = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      const Vt = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || (typeof t !== 'object' && typeof t !== 'function')
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments),
            )
          );
        }
        return (
          (function(e, t) {
            if (typeof t !== 'function' && t !== null)
              throw new TypeError(
                `Super expression must either be null or a function, not ${typeof t}`,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, o.a.PureComponent),
          Qt(t, [
            {
              key: 'componentWillMount',
              value() {
                this.props.login || this.props.history.push('/login'),
                  this.props.setUserObject({}),
                  this.props.getUsers();
              },
            },
            {
              key: 'render',
              value() {
                const e = this;
                return Kt(
                  o.a.Fragment,
                  {},
                  void 0,
                  Kt(kt, {
                    userObject: this.props.userObject,
                    login: this.props.login,
                  }),
                  Kt(
                    qt,
                    {},
                    void 0,
                    Object.values(this.props.userCards).map((t, n) => {
                      let r = n;
                      return Kt(
                        Wt,
                        { user: t, gid: e.props.userObject.googleId },
                        r,
                      );
                    }),
                  ),
                );
              },
            },
          ]),
          t
        );
      })();
      let Xt = Object(d.b)({
          userObject: m(),
          login: y(),
          userCards: Object(d.a)(g, e => e.get('userCards').toJS()),
        }),
        Yt = Object(c.connect)(Xt, e =>
          p.bindActionCreators,
        )({ changeLoginStatus: R, getUsers: T, setUserObject: P }, e)),
        Zt = (function(e) {
          let t = e.key,
            n = e.reducer;
          return function(e) {
            const r = (function(r) {
              function a() {
                let e, t, n;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, a);
                for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
                  o[i] = arguments[i];
                return (
                  (t = n = Ke(
                    this,
                    (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(
                      e,
                      [this].concat(o),
                    ),
                  )),
                  (n.injectors = We(n.context.store)),
                  Ke(n, t)
                );
              }
              return (
                (function(e, t) {
                  if (typeof t !== 'function' && t !== null)
                    throw new TypeError(
                      `Super expression must either be null or a function, not ${typeof t}`,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(a, o.a.Component),
                qe(a, [
                  {
                    key: 'componentWillMount',
                    value() {
                      (0, this.injectors.injectReducer)(t, n);
                    },
                  },
                  {
                    key: 'render',
                    value() {
                      return o.a.createElement(e, this.props);
                    },
                  },
                ]),
                a
              );
            })();
            return (
              (r.WrappedComponent = e),
              (r.contextTypes = { store: h.a.object.isRequired }),
              (r.displayName = `withReducer(${e.displayName ||
                e.name ||
                'Component'})`),
              ve()(r, e)
            );
          };
        })({ key: 'home', reducer: it }),
        en = (function(e) {
          let t = e.key,
            n = e.saga,
            r = e.mode;
          return function(e) {
            const a = (function(a) {
              function i() {
                let e, t, n;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, i);
                for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
                  o[a] = arguments[a];
                return (
                  (t = n = ot(
                    this,
                    (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(
                      e,
                      [this].concat(o),
                    ),
                  )),
                  (n.injectors = nt(n.context.store)),
                  ot(n, t)
                );
              }
              return (
                (function(e, t) {
                  if (typeof t !== 'function' && t !== null)
                    throw new TypeError(
                      `Super expression must either be null or a function, not ${typeof t}`,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(i, o.a.Component),
                rt(i, [
                  {
                    key: 'componentWillMount',
                    value() {
                      (0, this.injectors.injectSaga)(
                        t,
                        { saga: n, mode: r },
                        this.props,
                      );
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value() {
                      (0, this.injectors.ejectSaga)(t);
                    },
                  },
                  {
                    key: 'render',
                    value() {
                      return o.a.createElement(e, this.props);
                    },
                  },
                ]),
                i
              );
            })();
            return (
              (a.WrappedComponent = e),
              (a.contextTypes = { store: h.a.object.isRequired }),
              (a.displayName = `withSaga(${e.displayName ||
                e.name ||
                'Component'})`),
              ve()(a, e)
            );
          };
        })({ key: 'home', saga: ft }),
        tn = Object(p.compose)(Zt, en, Yt)(Object(B.withRouter)(Vt)),
        nn = (function() {
          const e =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          return function(t, n, r, o) {
            let a = t && t.defaultProps,
              i = arguments.length - 3;
            if ((n || i === 0 || (n = {}), n && a))
              for (const c in a) void 0 === n[c] && (n[c] = a[c]);
            else n || (n = a || {});
            if (i === 1) n.children = o;
            else if (i > 1) {
              for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
              n.children = s;
            }
            return {
              $$typeof: e,
              type: t,
              key: void 0 === r ? null : `${r}`,
              ref: null,
              props: n,
              _owner: null,
            };
          };
        })();
      function rn() {
        return nn(
          o.a.Fragment,
          {},
          void 0,
          nn(
            f.Switch,
            {},
            void 0,
            nn(f.Route, { exact: !0, path: '/', component: tn }),
            nn(f.Route, { exact: !0, path: '/Login', component: he }),
            nn(f.Route, { component: ye }),
          ),
        );
      }
      let on = n('ab039aecd4a1d4fedc0e'),
        an = function(e) {
          return e.get('language', Me);
        },
        cn = (function() {
          const e =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          return function(t, n, r, o) {
            let a = t && t.defaultProps,
              i = arguments.length - 3;
            if ((n || i === 0 || (n = {}), n && a))
              for (const c in a) void 0 === n[c] && (n[c] = a[c]);
            else n || (n = a || {});
            if (i === 1) n.children = o;
            else if (i > 1) {
              for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
              n.children = s;
            }
            return {
              $$typeof: e,
              type: t,
              key: void 0 === r ? null : `${r}`,
              ref: null,
              props: n,
              _owner: null,
            };
          };
        })(),
        sn = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      let un = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (function(e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return !t || (typeof t !== 'object' && typeof t !== 'function')
                  ? e
                  : t;
              })(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                  this,
                  arguments,
                ),
              )
            );
          }
          return (
            (function(e, t) {
              if (typeof t !== 'function' && t !== null)
                throw new TypeError(
                  `Super expression must either be null or a function, not ${typeof t}`,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, o.a.PureComponent),
            sn(t, [
              {
                key: 'render',
                value() {
                  return cn(
                    on.IntlProvider,
                    {
                      locale: this.props.locale,
                      messages: this.props.messages[this.props.locale],
                    },
                    this.props.locale,
                    o.a.Children.only(this.props.children),
                  );
                },
              },
            ]),
            t
          );
        })(),
        ln = Object(d.a)(Object(d.a)(an, e => e.get('locale')), e => ({
          locale: e,
        }));
      let fn = Object(c.connect)(ln, e => ({ dispatch: e }))(un),
        pn = (n('9c6be9f00377ac8be3d8'),
        n('4ce54d943eb1f3decabb'),
        n('74431d47afb6248fcb69')),
        dn = n('f363639bc5c3c97af546'),
        bn = n('f3928fff383c64a90ada'),
        hn = n.n(bn),
        gn = regeneratorRuntime.mark(xn),
        yn = regeneratorRuntime.mark(On),
        mn = regeneratorRuntime.mark(_n);
      function vn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
            : (e[t] = n),
          e
        );
      }
      const wn = hn.a.auth().app.database();
      function jn() {
        var e = Object(pn.c)(
          t => (
          wn.ref('users/').on('child_changed', (e) => {
              return t(e.val());
            }),
          function() {
            return wn.ref('users').off(e);
          }
        ),
          pn.a.expanding(1),
        );
        return e;
      }
      function xn(e) {
        return regeneratorRuntime.wrap(
          t => {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.prev = 0),
                    (t.next = 3),
                    Object(ct.c)(U(vn({}, e.googleId, e)))
                  );
                case 3:
                  t.next = 8;
                  break;
                case 5:
                  (t.prev = 5), (t.t0 = t.catch(0)), console.log(t.t0);
                case 8:
                case 'end':
                  return t.stop();
              }
          },
          gn,
          this,
          [[0, 5]],
        );
      }
      function On() {
        let e, t;
        return regeneratorRuntime.wrap(
          n => {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  e = jn();
                case 1:
                  return (n.next = 4), Object(ct.e)(e);
                case 4:
                  return (t = n.sent), (n.next = 7), Object(ct.a)(xn, t);
                case 7:
                  n.next = 1;
                  break;
                case 9:
                case 'end':
                  return n.stop();
              }
          },
          yn,
          this,
        );
      }
      function _n() {
        return regeneratorRuntime.wrap(
          e => {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Object(ct.b)(On);
                case 2:
                case 'end':
                  return e.stop();
              }
          },
          mn,
          this,
        );
      }
      let kn = regeneratorRuntime.mark(Bn),
        Sn = regeneratorRuntime.mark($n),
        Cn = regeneratorRuntime.mark(zn),
        Rn = regeneratorRuntime.mark(Dn),
        Pn = regeneratorRuntime.mark(Hn),
        En = regeneratorRuntime.mark(Jn),
        Nn = regeneratorRuntime.mark(Fn),
        In = regeneratorRuntime.mark(Gn),
        Tn = regeneratorRuntime.mark(Wn),
        An = regeneratorRuntime.mark(qn),
        Un = regeneratorRuntime.mark(Kn),
        Ln = '/api/',
        Mn = {
          user: {
            get(e) {
              return `user/userId=${e}`;
            },
            login() {
              return 'user/login/';
            },
            update() {
              return 'user/login/update';
            },
            addComment() {
              return 'user/addComment';
            },
            logout() {
              return 'user/logout';
            },
          },
          users: {
            get() {
              return 'users/';
            },
            create() {
              return 'users/';
            },
          },
        };
      function Bn(e) {
        let t, n, r;
        return regeneratorRuntime.wrap(
          o => {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (o.prev = 0),
                    (t = {
                      method: 'POST',
                      body: JSON.stringify(e),
                      headers: { 'Content-Type': 'application/json' },
                    }),
                    (n = Ln + Mn.user.login()),
                    (o.next = 5),
                    Object(ct.a)(dn.a, n, t)
                  );
                case 5:
                  if (!(r = o.sent).status) {
                    o.next = 9;
                    break;
                  }
                  return (o.next = 9), Object(ct.c)(E(r.userObject));
                case 9:
                  o.next = 14;
                  break;
                case 11:
                  (o.prev = 11), (o.t0 = o.catch(0)), console.log(o.t0);
                case 14:
                case 'end':
                  return o.stop();
              }
          },
          kn,
          this,
          [[0, 11]],
        );
      }
      function $n() {
        let e;
        return regeneratorRuntime.wrap(
          t => {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 3), Object(ct.e)(w);
                case 3:
                  return (t.next = 5), Object(ct.d)(m());
                case 5:
                  return (e = t.sent), (t.next = 8), Object(ct.a)(Bn, e);
                case 8:
                  t.next = 0;
                  break;
                case 10:
                case 'end':
                  return t.stop();
              }
          },
          Sn,
          this,
        );
      }
      function zn(e) {
        let t, n;
        return regeneratorRuntime.wrap(
          r => {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (t = Ln + Mn.user.get(e)),
                    (r.next = 4),
                    Object(ct.a)(dn.a, t)
                  );
                case 4:
                  if (!(n = r.sent).status) {
                    r.next = 8;
                    break;
                  }
                  return (r.next = 8), Object(ct.c)(P, n.userObject);
                case 8:
                  r.next = 13;
                  break;
                case 10:
                  (r.prev = 10), (r.t0 = r.catch(0)), console.log(r.t0);
                case 13:
                case 'end':
                  return r.stop();
              }
          },
          Cn,
          this,
          [[0, 10]],
        );
      }
      function Dn() {
        let e;
        return regeneratorRuntime.wrap(
          t => {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 3), Object(ct.e)(j);
                case 3:
                  return (e = t.sent), (t.next = 6), Object(ct.a)(zn, e.userId);
                case 6:
                  t.next = 0;
                  break;
                case 8:
                case 'end':
                  return t.stop();
              }
          },
          Rn,
          this,
        );
      }
      function Hn() {
        let e, t;
        return regeneratorRuntime.wrap(
          n => {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.prev = 0),
                    (e = Ln + Mn.users.get()),
                    (n.next = 4),
                    Object(ct.a)(dn.a, e)
                  );
                case 4:
                  if (!(t = n.sent).status) {
                    n.next = 8;
                    break;
                  }
                  return (n.next = 8), Object(ct.c)(I(t.users));
                case 8:
                  n.next = 13;
                  break;
                case 10:
                  (n.prev = 10), (n.t0 = n.catch(0)), console.log(n.t0);
                case 13:
                case 'end':
                  return n.stop();
              }
          },
          Pn,
          this,
          [[0, 10]],
        );
      }
      function Jn() {
        return regeneratorRuntime.wrap(
          e => {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 3), Object(ct.e)(O);
                case 3:
                  return (e.next = 5), Object(ct.a)(Hn);
                case 5:
                  e.next = 0;
                  break;
                case 7:
                case 'end':
                  return e.stop();
              }
          },
          En,
          this,
        );
      }
      function Fn(e) {
        let t, n;
        return regeneratorRuntime.wrap(
          r => {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (t = Ln + Mn.user.addComment()),
                    (n = {
                      method: 'POST',
                      body: JSON.stringify(e),
                      headers: { 'Content-Type': 'application/json' },
                    }),
                    (r.next = 5),
                    Object(ct.a)(dn.a, t, n)
                  );
                case 5:
                  r.next = 10;
                  break;
                case 7:
                  (r.prev = 7), (r.t0 = r.catch(0)), console.log(r.t0);
                case 10:
                case 'end':
                  return r.stop();
              }
          },
          Nn,
          this,
          [[0, 7]],
        );
      }
      function Gn() {
        let e, t, n;
        return regeneratorRuntime.wrap(
          r => {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.next = 3), Object(ct.e)(k);
                case 3:
                  return (e = r.sent), (r.next = 6), Object(ct.d)(m());
                case 6:
                  if (((r.t0 = r.sent.googleId), r.t0)) {
                    r.next = 9;
                    break;
                  }
                  r.t0 = 'anonym';
                case 9:
                  return (
                    (t = r.t0),
                    (n = {
                      text: e.data.text,
                      recieverId: e.data.userId,
                      senderId: t,
                    }),
                    (r.next = 13),
                    Object(ct.a)(Fn, n)
                  );
                case 13:
                  r.next = 0;
                  break;
                case 15:
                case 'end':
                  return r.stop();
              }
          },
          In,
          this,
        );
      }
      function Wn(e) {
        let t, n;
        return regeneratorRuntime.wrap(
          r => {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (t = Ln + Mn.user.logout()),
                    (n = {
                      method: 'POST',
                      body: JSON.stringify(e),
                      headers: { 'Content-Type': 'application/json' },
                    }),
                    (r.next = 5),
                    Object(ct.a)(dn.a, t, n)
                  );
                case 5:
                  r.next = 10;
                  break;
                case 7:
                  (r.prev = 7), (r.t0 = r.catch(0)), console.log(r.t0);
                case 10:
                case 'end':
                  return r.stop();
              }
          },
          Tn,
          this,
          [[0, 7]],
        );
      }
      function qn() {
        let e;
        return regeneratorRuntime.wrap(
          t => {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 3), Object(ct.e)(C);
                case 3:
                  return (
                    (e = t.sent), (t.next = 6), Object(ct.a)(Wn, { id: e.data })
                  );
                case 6:
                  t.next = 0;
                  break;
                case 8:
                case 'end':
                  return t.stop();
              }
          },
          An,
          this,
        );
      }
      function Kn() {
        return regeneratorRuntime.wrap(
          e => {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    [$n, Dn, Jn, Gn, _n, qn].map(e => Object(ct.a)(e))
                  );
                case 2:
                case 'end':
                  return e.stop();
              }
          },
          Un,
          this,
        );
      }
      let Qn = Kn,
        Vn = (typeof Symbol === 'function' && Symbol.iterator, Object(pn.b)());
      const Xn = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
        );
      })(
        [
          "\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: #454545;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n\n  body.fontLoaded {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n\n  #app {\n    height: 100%;\n  }\n\n  p,\n  label {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 1.5em;\n  }\n\n  div {\n    display: flex;\n    box-sizing: border-box;\n\n    /* width */\n    ::-webkit-scrollbar {\n        width: 5px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background: transparent; \n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: #dedede; \n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: #f9c53f; \n    }\n  }\n\n  * {\n    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); \n  }\n",
        ],
        [
          "\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: #454545;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n\n  body.fontLoaded {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n\n  #app {\n    height: 100%;\n  }\n\n  p,\n  label {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 1.5em;\n  }\n\n  div {\n    display: flex;\n    box-sizing: border-box;\n\n    /* width */\n    ::-webkit-scrollbar {\n        width: 5px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background: transparent; \n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: #dedede; \n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: #f9c53f; \n    }\n  }\n\n  * {\n    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); \n  }\n",
        ],
      );
      Object($.b)(Xn);
      let Yn = (function() {
          const e =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          return function(t, n, r, o) {
            let a = t && t.defaultProps,
              i = arguments.length - 3;
            if ((n || i === 0 || (n = {}), n && a))
              for (const c in a) void 0 === n[c] && (n[c] = a[c]);
            else n || (n = a || {});
            if (i === 1) n.children = o;
            else if (i > 1) {
              for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 3];
              n.children = s;
            }
            return {
              $$typeof: e,
              type: t,
              key: void 0 === r ? null : `${r}`,
              ref: null,
              props: n,
              _owner: null,
            };
          };
        })(),
        Zn = l()(),
        er = (function() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments[1],
            n = [Vn, Object(s.routerMiddleware)(t)],
            r = [p.applyMiddleware.apply(void 0, n)],
            o = p.compose,
            a = Object(p.createStore)(Ge(), Object(Ae.fromJS)(e), o(...r));
          return (
            (a.runSaga = Vn.run),
            a.runSaga(Qn),
            (a.injectedReducers = {}),
            (a.injectedSagas = {}),
            a
          );
        })({}, Zn),
        tr = document.getElementById('app'),
        nr = function(e) {
          i.a.render(
            Yn(
              c.Provider,
              { store: er },
              void 0,
              Yn(
                fn,
                { messages: e },
                void 0,
                Yn(s.ConnectedRouter, { history: Zn }, void 0, Yn(rn, {})),
              ),
            ),
            tr,
          );
        };
      window.Intl
        ? nr(Le.translationMessages)
        : new Promise(e => {
            e(
              Promise.all([n.e(0), n.e(3)]).then(
                n.t.bind(null, '97694e21b72f8e9351c4', 7),
              ),
            );
          })
          .then(() =>
              Promise.all([
            n.e(2).then(n.t.bind(null, 'f030ad8f70186ef5cb63', 7)),
          ]),
            )
          .then(() => nr(Le.translationMessages))
          .catch(e => {
              throw e;
            }),
      n('30d14b3a3295666f3aba').install();
    },
    '9c6be9f00377ac8be3d8': function(e, t, n) {
      e.exports = `${n.p}favicon.ico`;
    },
    a237392145f68026c892(e, t) {},
    f363639bc5c3c97af546(e, t, n) {
      (function(e) {
        n.d(t, 'a', () => a);
        n('81466c1910d9b02d71b2');
        function r(e) {
          return e.status === 204 || e.status === 205 ? null : e.json();
        }
        function o(e) {
          if (e.status >= 200 && e.status < 300) return e;
          const t = new Error(e.statusText);
          throw ((t.response = e), t);
        }
        function a(t, n) {
          return e(t, n)
            .then(o)
            .then(r);
        }
      }.call(this, n('5e511fa944f88972e69c')));
    },
    f3928fff383c64a90ada(e, t, n) {
      const r = n('bb63faa1fdb116e40ae6');
      r.initializeApp({
        apiKey: 'AIzaSyBcR-rpqnkH0-rHntMJmk1-PiGXjQknfoU',
        authDomain: 'fagotex-f6586.firebaseapp.com',
        databaseURL: 'https://fagotex-f6586.firebaseio.com',
        projectId: 'fagotex-f6586',
        storageBucket: 'fagotex-f6586.appspot.com',
        messagingSenderId: '99552855073',
      }),
        (e.exports = r);
    },
  },
  [[1, 4, 5]],
]);
