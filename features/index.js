/**
    * The folder features contains features of all feature,
    * so here you will find folder names which are listed in root pages.
**/

/*
    Authentication
*/

import FeatureSignIn from './auth/sign-in/FeatureSignIn';


/*
    Master Data
*/

import FeaturePasien from './master-data/pasien/FeaturePasien';
import FeaturePerawatan from './master-data/perawatan/FeaturePerawatan';
import FeaturePoli from './master-data/poli/FeaturePoli';
import FeatureProduk from './master-data/produk/FeatureProduk';
import FeatureRuangan from './master-data/ruangan/FeatureRuangan';
import FeatureStaff from './master-data/staff/FeatureStaff';

/*
    Operational
*/

import FeatureJanjiTemu from './operational/janji-temu/FeatureJanjiTemu';
import FeaturePenjualan from './operational/penjualan/FeaturePenjualan';
import FeatureRekamMedis from './operational/rekam-medis/FeatureRekamMedis';
import FeatureTagihan from './operational/tagihan/FeatureTagihan';

/*
    Menejemen Stok
*/

import FeatureBarangMasuk from './menejemen-stok/barang-masuk/FeatureBarangMasuk';
import FeatureBarangKeluar from './menejemen-stok/barang-keluar/FeatureBarangKeluar';
import FeaturePenyesuaianBarang from './menejemen-stok/penyesuaian-barang/FeaturePenyesuaianBarang';


/*
    Pengaturan
*/

import FeaturePerusahaan from './pengaturan/perusahaan/FearurePerusahaan';

export {
    FeatureSignIn,

    FeaturePasien,
    FeaturePerawatan,
    FeaturePoli,
    FeatureProduk,
    FeatureRuangan,
    FeatureStaff,

    FeatureJanjiTemu,
    FeaturePenjualan,
    FeatureRekamMedis,
    FeatureTagihan,

    FeatureBarangMasuk,
    FeatureBarangKeluar,
    FeaturePenyesuaianBarang,

    FeaturePerusahaan,
};