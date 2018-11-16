<?php

namespace App\Repository;

use App\Entity\Coeff;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Coeff|null find($id, $lockMode = null, $lockVersion = null)
 * @method Coeff|null findOneBy(array $criteria, array $orderBy = null)
 * @method Coeff[]    findAll()
 * @method Coeff[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CoeffRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Coeff::class);
    }

    public function findByLevelName($level) {

        $queryBuilder = $this->createQueryBuilder('coeff')
            ->join('coeff.level', 'l')
            ->andWhere('l.name = :level')
            ->setParameter(':level', $level)
            ->getQuery();

            return $queryBuilder->execute();
    }

    // /**
    //  * @return Coeff[] Returns an array of Coeff objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Coeff
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
