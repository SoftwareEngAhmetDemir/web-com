export default function Announcements() {
  return (
    <div className="announcements text-center">
      <div className="flex justify-center items-center w-full">
        <iframe
          name="f886cba00edaa7dfb"
          width="500px"
          height="1000px"
          data-testid="fb:page Facebook Social Plugin"
          title="fb:page Facebook Social Plugin"
          frameBorder="0"
          scrolling="no"
          allow="encrypted-media"
          src="https://www.facebook.com/v9.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df0dcce5651efc0e04%26domain%3Dcapomt2.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcapomt2.com%252Ffa0dfb05fda0b361b%26relation%3Dparent.parent&amp;container_width=625&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcapo2wslik&amp;locale=tr_TR&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=500"
          style={{
            border: "none",
            visibility: "visible",
            width: "500px",
            height: "500px"
          }}
        ></iframe>
      </div>
      <h1 className="text-[2rem] font-medium my-5">Announcements</h1>
      <hr className="my-[20px]" />

      <h3>No Announcements Added!</h3>
    </div>
  );
}
