import { GoogleMapsEmbed, YouTubeEmbed } from '@next/third-parties/google'

export default function Page() {
  return (
    <>
      <YouTubeEmbed videoid="ogfYd705cRs" height={400} params="controls=0" />
      <GoogleMapsEmbed
        apiKey="XYZ"
        mode="place"
        q="Brooklyn+Bridge,New+York,NY"
        style={''}
        allowfullscreen={false}
        loading={'eager'} />
    </>
  )
}