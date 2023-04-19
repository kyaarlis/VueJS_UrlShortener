<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class MyComponent extends Vue {
  async shortenUrl(longUrl: string): Promise<string> {
    try {
      const response = await axios.post('https://api.t.ly/v1/shorten', {
        long_url: longUrl,
        domain: 't.ly'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Api-Key': 'q9L9EeAOUA0UX5QWfuoyDhQEQbHnIIJ6xlKoYhnYnYVhKPq5WrAVIQ82q3rX' // Replace with your t.LY API key
        }
      });
      return response.data.short_url;
    } catch (error) {
      console.error(error);
      return '';
    }
  }
}
</script>
