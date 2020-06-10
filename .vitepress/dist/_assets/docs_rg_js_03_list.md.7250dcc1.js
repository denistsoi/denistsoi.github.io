import{f as n,e as s,s as a}from"./common-67d8f095.js";const t='{"title":"","frontmatter":{"prev":"/en/js/03/","next":false},"lastUpdated":1591831922649.0532}';var p={};const o=a('<div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token comment">// Make a list</span>\n  <span class="token keyword">var</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>ul<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> li1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> li2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  li1<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">;</span>\n  li2<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">;</span>\n  ul<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ul<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">hide</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// e.target refers to the clicked &lt;li&gt; element</span>\n    <span class="token comment">// This is different than e.currentTarget which would refer to the parent &lt;ul&gt; in this context</span>\n    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// Attach the listener to the list</span>\n  <span class="token comment">// It will fire when each &lt;li&gt; is clicked</span>\n  ul<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> hide<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);p.render=function(a,t){return s(),n("div",null,[o])};export default p;export{t as __pageData};
