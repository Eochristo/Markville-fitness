export function ContactInfoCard() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">Phone</h3>
          <a
            href="tel:905-209-0763"
            className="text-primary hover:underline"
          >
            905-209-0763
          </a>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">Email</h3>
          <a
            href="mailto:MarkvilleFitness@gmail.com"
            className="text-primary hover:underline"
          >
            MarkvilleFitness@gmail.com
          </a>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">Address</h3>
          <p className="text-muted-foreground">
            190 Bullock Drive<br />
            Markham, Ontario L3P 1V7<br />
            Canada
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Hours of Operation</h3>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex justify-between">
              <span>Monday to Friday:</span>
              <span>6:30am - 10:30pm</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday & Sunday:</span>
              <span>8:00am - 7:00pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
