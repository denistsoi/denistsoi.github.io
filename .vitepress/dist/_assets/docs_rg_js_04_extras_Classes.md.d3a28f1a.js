import{f as n,e as s,s as a}from"./common-67d8f095.js";const p='{"title":"Class Version ES6","frontmatter":{},"headers":[{"level":2,"title":"Class Version ES6","slug":"class-version-es6"}],"lastUpdated":1591831922650.5933}';var t={};const o=a('<h2 id="class-version-es6"><a class="header-anchor" href="#class-version-es6" aria-hidden="true">#</a> Class Version ES6</h2><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name  <span class="token operator">=</span> params<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>age   <span class="token operator">=</span> params<span class="token punctuation">.</span>age<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>likes <span class="token operator">=</span> params<span class="token punctuation">.</span>likes <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">sayHi</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> greet <span class="token operator">=</span> <span class="token string">&#39;Hi my name is &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greet<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> Denis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Denis&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> likes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;computers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;books&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Denis<span class="token punctuation">)</span><span class="token punctuation">;</span>\nDenis<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',2);t.render=function(a,p){return s(),n("div",null,[o])};export default t;export{p as __pageData};
