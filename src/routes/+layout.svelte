<script>
  import '../app.css'
</script>

<div class="min-h-screen flex flex-col">
  <main class="flex-grow max-w-4xl mx-auto p-4 w-full">
    <slot></slot>
  </main>
  <footer class="max-w-4xl mx-auto p-4">
    <p>
      Visit <a class="text-blue-500" href="https://novacards.ai"
        >NovaCards main site</a
      > for other cool stuff.
    </p>
  </footer>
</div>
