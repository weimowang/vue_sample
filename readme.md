
## Learning Laravel + VUE
vue 2 + laravel for my web <br /> 

VUE專案部分:
resources/js路徑下<br />
components<br />
router<br />
vuex的store<br />
utility:localstorage<br />

<h2>Getting started 如何執行專案：</h2><br /> 
1.Clone the github repo: <br /> 
<div class="highlight highlight-source-shell">
     <pre>
     <span class="pl-c"><span class="pl-c">#</span> Clone the github</span>
     <span class="pl-k">&gt;</span> git clone url
     </pre>
</div>
2.Install the project dependencies:composer install and npm install<br /> 
<div class="highlight highlight-source-shell">
     <pre>
     <span class="pl-c">
     <span class="pl-k">&gt;</span> composer install</span>
     <span class="pl-k">&gt;</span> npm install
     </pre>
</div>
3.copy the laravel environment setting<br /> 
<div class="highlight highlight-source-shell">
     <pre>
     <span class="pl-c"><span class="pl-c">#</span> linux </span>
     <span class="pl-k">&gt;</span> cp .env.example .env
     <span class="pl-c"><span class="pl-c">#</span> windows </span>
     <span class="pl-k">&gt;</span> copy .env.example .env
     </pre>
</div>
4.Create the application key: <br /> 
<div class="highlight highlight-source-shell">
     <pre>
     <span class="pl-c"><span class="pl-c">#</span> generate</span>
     <span class="pl-k">&gt;</span> php artisan key:generate
     </pre>
</div>
5.Start the laravel server: <br /> 
<div class="highlight highlight-source-shell">
     <pre>
     <span class="pl-c"><span class="pl-c">#</span> run serve</span>
     <span class="pl-k">&gt;</span> php artisan serve
     </pre>
</div>
