const baseURL =
  "https://api-v1-biznest-staging.merakitechs.com.np/api/v1/public/blog/post";

async function getPostData() {
  try {
    const response = await fetch(`${baseURL}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    console.log(jsonData.results);
    return jsonData.results;
  } catch (error) {
    console.error("Error:", error);
  }
}

const container = document.querySelector(".container");

getPostData().then((blogPosts) => {
  let posts = blogPosts
    ?.map((blogPost, i) => {
      const content =
        blogPost.excerpt !== null
          ? blogPost.excerpt
          : blogPost.content.slice(
              0,
              blogPost.content.split(" ", 30).join(" ").length
            );
      const publishedDate = new Date(blogPost.published_date);
      const now = new Date();
      const timeDiff = now.getTime() - publishedDate.getTime();
      const secondsDiff = Math.round(timeDiff / 1000);
      const minutesDiff = Math.round(secondsDiff / 60);
      const hoursDiff = Math.round(minutesDiff / 60);
      const daysDiff = Math.round(hoursDiff / 24);
      const monthsDiff = Math.round(daysDiff / 30);
      const yearsDiff = Math.round(monthsDiff / 12);
      let formattedDate;

      if (yearsDiff > 1) {
        formattedDate = publishedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } else if (monthsDiff > 1) {
        formattedDate = `${monthsDiff} months ago`;
      } else if (daysDiff > 1) {
        formattedDate = `${daysDiff} days ago`;
      } else if (hoursDiff > 1) {
        formattedDate = `${hoursDiff} hours ago`;
      } else if (minutesDiff > 1) {
        formattedDate = `${minutesDiff} minutes ago`;
      } else {
        formattedDate = `${secondsDiff} seconds ago`;
      }

      return `
      <div class="card">
        <div class="card_header">
          <div class="category">
            <span>${blogPost.category.name}</span>
          </div>
          <img
            src="${blogPost.featured_image}"
            alt="card_image"
            class="card_image"
          />
        </div>
        <div class="card_body">
          <div class="extra_info">
            <div class="likes">
              <i class="fa fa-heart"></i>
              <span>100 Likes</span>
            </div>
            <div class="comments">
              <i class="fa fa-comments"></i>
              <span>${blogPost.total_comments} Comments</span>
            </div>
          </div>
          <a href="${baseURL}?slug=${blogPost.slug}"><h4>${blogPost.title}</h4></a>
          <p>
          ${content}
          </p>
        </div>
        <div class="card_footer">
          <div class="author">
            <img
              src="${blogPost.author.photo}"
              alt="author_image"
              class="author_image"
            />
            <div class="author_info">
              <h5>${blogPost.author.full_name}</h5>
              <small>${formattedDate}
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
  container.innerHTML = posts;
});
