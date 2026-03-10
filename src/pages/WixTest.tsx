import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useEffect, useState } from "react";
import { wixClient } from "@/lib/wix-client";

const WixTest = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await wixClient.items.query("Locations").find();
        setData(result.items || []);
      } catch (err: any) {
        console.error("Wix fetch error:", err);
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <PageHeader tag="Developer" title="Wix Data Test" subtitle="Testing connection to Wix Headless" />
      <section className="py-16">
        <div className="container max-w-3xl">
          {loading && <p className="text-muted-foreground">Loading data from Wix...</p>}
          {error && (
            <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
              <p className="font-semibold">Error:</p>
              <p className="text-sm">{error}</p>
            </div>
          )}
          {!loading && !error && (
            <div className="space-y-4">
              <p className="text-muted-foreground">Found {data.length} item(s)</p>
              <pre className="bg-muted p-4 rounded-lg text-xs overflow-auto max-h-[500px]">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default WixTest;
