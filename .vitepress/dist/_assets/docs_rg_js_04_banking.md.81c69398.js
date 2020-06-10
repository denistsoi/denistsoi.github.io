import{f as n,e as s,s as a}from"./common-67d8f095.js";const t='{"title":"","frontmatter":{},"lastUpdated":1591831922649.9705}';var p={};const o=a('<div class="language-java"><pre><code><span class="token keyword">package</span> banking<span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io</span><span class="token punctuation">.</span>*<span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Banking</span> <span class="token punctuation">{</span>\n    <span class="token comment">//Creating arrays to store account number</span>\n  <span class="token keyword">static</span> <span class="token keyword">int</span> account_number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> <span class="token keyword">int</span> account_pin<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> <span class="token keyword">int</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>indexToCheck<span class="token punctuation">;</span>\n  <span class="token keyword">static</span> <span class="token class-name">String</span> account_name<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> <span class="token keyword">int</span> account_balance<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> <span class="token keyword">int</span> genAcctNum<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">,</span>acc_number<span class="token punctuation">,</span>pin<span class="token punctuation">,</span>newpin<span class="token punctuation">;</span>\n     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">{</span>\n        <span class="token comment">//Creating objects that enable reading input</span>\n        <span class="token class-name">InputStreamReader</span> isr<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">BufferedReader</span> br<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>isr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> choice<span class="token operator">=</span><span class="token number">999</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span>depAmt<span class="token punctuation">,</span>withAmt<span class="token punctuation">;</span>\n       <span class="token keyword">while</span><span class="token punctuation">(</span>choice<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your choice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;1. Create1 Account&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;2. Deposit Money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;3. Withdraw money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;4. Check balance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;5. Change PIN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;0. Quit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        \n        choice <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n       \n        <span class="token keyword">if</span><span class="token punctuation">(</span>choice<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Please enter your name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        account_name<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">=</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        account_number<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">=</span>genAcctNum<span class="token punctuation">;</span>\n        account_balance<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your 4 digit account pin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        account_pin<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Your account number is &quot;</span><span class="token operator">+</span>genAcctNum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        index<span class="token operator">=</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>\n        genAcctNum<span class="token operator">=</span>genAcctNum<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>choice<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your account number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            acc_number <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your pin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            pin<span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            result<span class="token operator">=</span><span class="token function">checkPin</span><span class="token punctuation">(</span>acc_number<span class="token punctuation">,</span>pin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the deposit amount&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                depAmt<span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n                account_balance<span class="token punctuation">[</span>acc_number<span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token operator">=</span> account_balance<span class="token punctuation">[</span>acc_number<span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">]</span> <span class="token operator">+</span> depAmt<span class="token punctuation">;</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>depAmt<span class="token operator">+</span><span class="token string">&quot; successfully deposited&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span><span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid pin, Try again&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>         \n        <span class="token punctuation">}</span>\n        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>choice<span class="token operator">==</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your account number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            acc_number <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your pin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            pin<span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            result<span class="token operator">=</span><span class="token function">checkPin</span><span class="token punctuation">(</span>acc_number<span class="token punctuation">,</span>pin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the withdrawal amount&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                withAmt<span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>account_balance<span class="token punctuation">[</span>acc_number<span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token operator">-</span>withAmt<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    account_balance<span class="token punctuation">[</span>acc_number<span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token operator">=</span>account_balance<span class="token punctuation">[</span>acc_number<span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token operator">-</span>withAmt<span class="token punctuation">;</span>\n                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>withAmt<span class="token operator">+</span><span class="token string">&quot; successfully withdrawn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token keyword">else</span><span class="token punctuation">{</span>\n                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Insufficient funds&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span><span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid pin, Try again&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>         \n        <span class="token punctuation">}</span>\n        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>choice<span class="token operator">==</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your account number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            acc_number <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your pin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            pin<span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            result<span class="token operator">=</span><span class="token function">checkPin</span><span class="token punctuation">(</span>acc_number<span class="token punctuation">,</span>pin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Your account balance is &quot;</span><span class="token operator">+</span>account_balance<span class="token punctuation">[</span>acc_number<span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span><span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid pin, Try again&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>     \n\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>choice<span class="token operator">==</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your account number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            acc_number <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your pin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            pin<span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            result<span class="token operator">=</span><span class="token function">checkPin</span><span class="token punctuation">(</span>acc_number<span class="token punctuation">,</span>pin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your new pin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                 newpin<span class="token operator">=</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                 account_pin<span class="token punctuation">[</span>acc_number<span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token operator">=</span>newpin<span class="token punctuation">;</span>\n                 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;PIN successfully changed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span><span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid pin, Try again&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>     \n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">checkPin</span><span class="token punctuation">(</span><span class="token keyword">int</span> account<span class="token punctuation">,</span><span class="token keyword">int</span> pin<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">int</span> checkingIndex<span class="token operator">=</span>account<span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>account_pin<span class="token punctuation">[</span>checkingIndex<span class="token punctuation">]</span><span class="token operator">==</span>pin<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">else</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n    <span class="token punctuation">}</span>\n\n\n<span class="token punctuation">}</span>\n</code></pre></div>',1);p.render=function(a,t){return s(),n("div",null,[o])};export default p;export{t as __pageData};
